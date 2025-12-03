from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.database import Base

class Ride(Base):
    __tablename__ = "rides"

    id = Column(Integer, primary_key=True, index=True)
    cab_id = Column(Integer, ForeignKey("cabs.id"))
    driver_id = Column(Integer, ForeignKey("drivers.id"))
    pickup = Column(String)
    drop = Column(String)
    distance_km = Column(Float)
    fare = Column(Float)     # NEW FIELD
