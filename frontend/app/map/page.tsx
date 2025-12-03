"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const MapSelector = dynamic(() => import("../../components/MapSelector"), {
  ssr: false,
});

export default function MapPage() {
  const [pickup, setPickup] = useState(null);
  const [drop, setDrop] = useState(null);
  const [canContinue, setCanContinue] = useState(false);

  useEffect(() => {
    if (pickup && drop) setCanContinue(true);
  }, [pickup, drop]);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-[#B8860B] mb-6">
        Select Pickup & Drop
      </h1>

      <MapSelector setPickup={setPickup} setDrop={setDrop} />

      {canContinue && (
        <a
          href={`/book?pickup=${encodeURIComponent(
            JSON.stringify(pickup)
          )}&drop=${encodeURIComponent(JSON.stringify(drop))}`}
          className="mt-6 inline-block bg-[#B8860B] text-white px-6 py-3 rounded-lg hover:bg-[#d4a53d]"
        >
          Continue Booking →
        </a>
      )}
    </div>
  );
}
