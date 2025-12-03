"use client";

export default function Navbar() {
  return (
    <header className="w-full h-16 bg-white border-b shadow-sm flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold tracking-wide text-gold">
        Hermes Cabs
      </h1>

      <button className="px-4 py-2 rounded-md border border-gold text-gold hover:bg-gold hover:text-white transition">
        Logout
      </button>
    </header>
  );
}
