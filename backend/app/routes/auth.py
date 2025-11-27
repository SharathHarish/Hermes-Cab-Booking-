from fastapi import APIRouter, HTTPException, Depends, status
from sqlalchemy.orm import Session
from pydantic import BaseModel

from app.database import get_db
from app.models.user import User
from app.utils.hash import Hash
from app.utils.token import create_access_token

router = APIRouter(prefix="/auth", tags=["Auth"])

# ---------------------------
# 📌 Request Models
# ---------------------------
class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str

class LoginRequest(BaseModel):
    email: str
    password: str


# ---------------------------
# ✅ REGISTER USER
# ---------------------------
@router.post("/register")
def register_user(data: RegisterRequest, db: Session = Depends(get_db)):

    # Check if user exists
    existing_user = db.query(User).filter(User.email == data.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

    # Hash password
    hashed_password = Hash.bcrypt(data.password)

    # Create new user
    new_user = User(
        name=data.name,
        email=data.email,
        password=hashed_password,
        role="customer"   # default role
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully",
        "user_id": new_user.id
    }


# ---------------------------
# ✅ LOGIN (JWT TOKEN)
# ---------------------------
@router.post("/login")
def login_user(data: LoginRequest, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email == data.email).first()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Invalid email or password"
        )

    # Verify password
    if not Hash.verify(user.password, data.password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid email or password"
        )

    # Generate token
    access_token = create_access_token({"user_id": user.id})

    return {
        "message": "Login successful",
        "token": access_token,
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "role": user.role
        }
    }
