from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class RideResponse(BaseModel):
    id: int
    user_id: int
    cab_id: int
    pickup_lat: float
    pickup_lng: float
    drop_lat: float
    drop_lng: float
    distance_km: float
    fare_amount: float
    status: str
    created_at: datetime

    class Config:
        orm_mode = True

