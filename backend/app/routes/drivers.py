from fastapi import APIRouter, Depends
from sqlmodel import Session
from app.database import get_db
from app.models.driver import Driver
from app.schemas.driver import DriverCreate

router = APIRouter(prefix="/drivers", tags=["Drivers"])

@router.post("/")
def create_driver(data: DriverCreate, session: Session = Depends(get_db)):
    driver = Driver(**data.dict())
    session.add(driver)
    session.commit()
    session.refresh(driver)
    return driver

@router.get("/available")
def get_available_drivers(session: Session = Depends(get_db)):
    return session.query(Driver).filter(Driver.is_available == True).all()
