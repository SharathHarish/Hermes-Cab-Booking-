"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";

// Fix Leaflet Marker Icons
const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapSelector({ setPickup, setDrop }) {
  const [pickupMarker, setPickupMarker] = useState(null);
  const [dropMarker, setDropMarker] = useState(null);
  const [step, setStep] = useState("pickup");

  function LocationSelector() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;

        if (step === "pickup") {
          setPickup({ lat, lng });
          setPickupMarker([lat, lng]);
          setStep("drop");
        } else {
          setDrop({ lat, lng });
          setDropMarker([lat, lng]);
        }
      },
    });
    return null;
  }

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
   <MapContainer
  center={[11.0, 78.0]}     // Central point of South India
  zoom={6}
  scrollWheelZoom={true}
  style={{ height: "500px", width: "100%" }}
  maxBounds={[
    [8.0, 73.0],   // SW (Kerala)
    [18.5, 85.5]   // NE (Andhra/Karnataka/TN top limit)
  ]}
  maxBoundsViscosity={1.0}
>

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <LocationSelector />

        {pickupMarker && <Marker position={pickupMarker} icon={markerIcon} />}
        {dropMarker && <Marker position={dropMarker} icon={markerIcon} />}
      </MapContainer>

      <div className="p-3 bg-white text-center text-gray-700 font-medium">
        {step === "pickup" ? "Select Pickup Location" : "Select Drop Location"}
      </div>
    </div>
  );
}
