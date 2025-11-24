from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Cab Booking API is running!"}
