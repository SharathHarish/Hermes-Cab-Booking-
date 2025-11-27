from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.ride import Ride
from app.schemas.ride import RideCreate, RideResponse

router = APIRouter(prefix="/rides", tags=["rides"])

@router.post("/book", response_model=RideResponse)
def book_ride(ride: RideCreate, db: Session = Depends(get_db)):
    # TODO: find nearest driver logic
    new_ride = Ride(
        passenger_id=ride.passenger_id,
        pickup_location=ride.pickup_location,
        drop_location=ride.drop_location,
        status="booked",
        estimated_fare=100.0  # temporary flat fare
    )
    db.add(new_ride)
    db.commit()
    db.refresh(new_ride)
    return new_ride

@router.patch("/{ride_id}/start")
def start_ride(ride_id: int, db: Session = Depends(get_db)):
    ride = db.query(Ride).filter(Ride.id == ride_id).first()
    if ride:
        ride.status = "in-progress"
        db.commit()
        db.refresh(ride)
    return ride

@router.patch("/{ride_id}/complete")
def complete_ride(ride_id: int, db: Session = Depends(get_db)):
    ride = db.query(Ride).filter(Ride.id == ride_id).first()
    if ride:
        ride.status = "completed"
        db.commit()
        db.refresh(ride)
    return ride

