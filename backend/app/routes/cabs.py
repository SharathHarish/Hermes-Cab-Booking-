from fastapi import APIRouter, Depends
from sqlmodel import Session
from app.database import get_db
from app.models.cab import Cab
from app.schemas.cab import CabCreate

router = APIRouter(prefix="/cabs", tags=["Cabs"])

@router.post("/")
def create_cab(data: CabCreate, session: Session = Depends(get_db)):
    cab = Cab(**data.dict())
    session.add(cab)
    session.commit()
    session.refresh(cab)
    return cab

@router.get("/available")
def get_available_cabs(session: Session = Depends(get_db)):
    return session.query(Cab).filter(Cab.is_available == True).all()
