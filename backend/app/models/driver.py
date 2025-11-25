from sqlmodel import SQLModel, Field
from typing import Optional
import uuid

class Driver(SQLModel, table=True):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    user_id: str
    vehicle_number: str
    vehicle_model: str
    rating: float = 5.0
    total_rides: int = 0
