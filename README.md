🚀 How to Run the Project (LOCAL)
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/Hermes-Cab-Booking-.git
cd Hermes-Cab-Booking-

🟦 FRONTEND — Next.js 14 (React)
2️⃣ Install dependencies
cd frontend
npm install

3️⃣ Add environment variables

Create frontend/.env.local:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key

4️⃣ Start the frontend
npm run dev


📍 Opens at → http://localhost:3000

🟥 BACKEND — FastAPI (Python)
5️⃣ Create and activate virtual environment

Windows:

cd ../backend
python -m venv env
env\Scripts\activate


Mac/Linux:

source env/bin/activate

6️⃣ Install backend dependencies
pip install -r requirements.txt

7️⃣ Add backend environment variables

Create backend/.env:

SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
GOOGLE_MAPS_API_KEY=your_maps_api_key
STRIPE_SECRET_KEY=your_stripe_secret

8️⃣ Start FastAPI server
uvicorn app.main:app --reload


📍 Backend → http://localhost:8000

🔗 FRONTEND ↔ BACKEND ↔ SUPABASE
If both servers are running:

Next.js: http://localhost:3000

FastAPI: http://localhost:8000

Your application is now fully connected.

🧪 Test API

Go to:

👉 http://localhost:8000

You should see:

{ "message": "Cab Booking API is running!" }

🛠 Tech Stack
Layer	Technology
Frontend	Next.js 14, React, Tailwind
Backend	FastAPI, Python
Database	Supabase PostgreSQL
Auth	Supabase Auth
Payments	Stripe
Maps	Google Distance Matrix API
