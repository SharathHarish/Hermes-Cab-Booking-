import { useState } from "react";

export default function BookRide() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/rides/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        passenger_id: 1, // replace with actual logged-in user
        pickup_location: pickup,
        drop_location: drop
      })
    });
    const data = await res.json();
    setMessage(`Ride booked! Driver ID: ${data.driver_id || "Not assigned yet"}`);
  };

  return (
    <div>
      <h1>Book a Ride</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Pickup Location" value={pickup} onChange={e => setPickup(e.target.value)} />
        <input placeholder="Drop Location" value={drop} onChange={e => setDrop(e.target.value)} />
        <button type="submit">Book Ride</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
