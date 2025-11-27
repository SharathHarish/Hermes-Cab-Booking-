from pydantic import BaseModel
from typing import Optional

class RideCreate(BaseModel):
    passenger_id: int
    pickup_location: str
    drop_location: str

class RideResponse(BaseModel):
    id: int
    passenger_id: int
    driver_id: Optional[int]
    status: str
    estimated_fare: float
