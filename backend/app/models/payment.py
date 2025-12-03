from sqlmodel import SQLModel, Field
import uuid

class Payment(SQLModel, table=True):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    ride_id: str
    stripe_payment_intent: str
    amount: float
    status: str
