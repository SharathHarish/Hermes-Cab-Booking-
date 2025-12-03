import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedPage() {
  const { user, loadingAuth } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loadingAuth && !user) router.push("/login");
  }, [loadingAuth, user]);

  if (loadingAuth) return <div>Loading...</div>;
  if (!user) return null;

  return <div>Protected content</div>;
}
import { useEffect, useState } from 'react';

export default function BookRide() {
  const [cabs, setCabs] = useState([]);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [selectedCab, setSelectedCab] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('/api/cabs', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(data => setCabs(data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/rides', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ cab_id: selectedCab, pickup, dropoff })
    });
    const data = await res.json();
    alert('Ride booked successfully!');
  };

  return (
    <div>
      <h1>Book a Ride</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select Cab:
          <select value={selectedCab} onChange={(e) => setSelectedCab(e.target.value)}>
            <option value="">--Select--</option>
            {cabs.map(cab => (
              <option key={cab.id} value={cab.id}>{cab.name} - {cab.type}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Pickup Location:
          <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} required />
        </label>
        <br />
        <label>
          Dropoff Location:
          <input type="text" value={dropoff} onChange={(e) => setDropoff(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Book Ride</button>
      </form>
    </div>
  );
}
