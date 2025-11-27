from pydantic import BaseModel

class CabCreate(BaseModel):
    cab_number: str
    cab_type: str
    driver_id: int
