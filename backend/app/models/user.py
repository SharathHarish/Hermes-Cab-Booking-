from sqlmodel import SQLModel, Field
from typing import Optional
import uuid

class User(SQLModel, table=True):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    supabase_uid: str
    name: str
    email: str
    phone: Optional[str] = None
    role: str  # rider / driver
