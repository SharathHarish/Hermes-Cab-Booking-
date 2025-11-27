from sqlmodel import SQLModel, Field
from typing import Optional

class Cab(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    cab_number: str
    cab_type: str   # sedan, suv, mini, bike
    driver_id: int = Field(foreign_key="driver.id")
    is_available: bool = True
