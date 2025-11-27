from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.database import Base

class Ride(Base):
    __tablename__ = "rides"
    id = Column(Integer, primary_key=True, index=True)
    passenger_id = Column(Integer, index=True)
    driver_id = Column(Integer, index=True, nullable=True)
    pickup_location = Column(String)
    drop_location = Column(String)
    status = Column(String, default="booked")
    estimated_fare = Column(Float)
