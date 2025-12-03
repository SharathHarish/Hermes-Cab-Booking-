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

export default function Rides() {
  const [rides, setRides] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('/api/rides', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setRides(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Rides</h1>
      <ul>
        {rides.map(ride => (
          <li key={ride.id}>
            {ride.user_name} | {ride.cab_name} | {ride.driver_name} | {ride.pickup} → {ride.dropoff} | {ride.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
