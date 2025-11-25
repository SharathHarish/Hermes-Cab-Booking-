from sqlmodel import SQLModel, Field
from typing import Optional
import uuid
from datetime import datetime

class Ride(SQLModel, table=True):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    rider_id: str
    driver_id: Optional[str] = None
    pickup_location: str
    drop_location: str
    distance_km: float
    fare: float
    status: str = "requested"  # requested / accepted / ongoing / completed / cancelled
    created_at: datetime = Field(default_factory=datetime.utcnow)
