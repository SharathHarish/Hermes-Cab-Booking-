from pydantic import BaseModel, EmailStr


# -----------------------------
# User Login Schema
# -----------------------------
class LoginSchema(BaseModel):
    email: EmailStr
    password: str


# -----------------------------
# User Response Schema (for /auth/me)
# -----------------------------
class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    role: str

    class Config:
        orm_mode = True
