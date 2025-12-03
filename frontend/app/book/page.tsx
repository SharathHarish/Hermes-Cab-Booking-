"use client";

import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useState } from "react";

export default function BookRide() {
  const params = useSearchParams();

  const pickup = JSON.parse(params.get("pickup") || "{}");
  const drop = JSON.parse(params.get("drop") || "{}");

  const [fare, setFare] = useState(null);
  const [rideId, setRideId] = useState(null);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const handleBook = async () => {
    const res = await axios.post(
      "http://localhost:8000/rides/create",
      {
        pickup_lat: pickup.lat,
        pickup_lng: pickup.lng,
        drop_lat: drop.lat,
        drop_lng: drop.lng,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setFare(res.data.fare);
    setRideId(res.data.ride_id);

    window.location.href = `/payment?ride_id=${res.data.ride_id}`;
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-[#B8860B]">
        Review and Confirm Ride
      </h1>

      <p className="mt-4">Pickup: {pickup.lat}, {pickup.lng}</p>
      <p>Drop: {drop.lat}, {drop.lng}</p>

      <button
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
        onClick={handleBook}
      >
        Book Ride
      </button>
    </div>
  );
}
