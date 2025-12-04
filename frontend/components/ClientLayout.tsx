"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideNavbarOn = ["/dashboard"];
  const showNavbar = !hideNavbarOn.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}

      <main className="min-h-screen px-6 py-6 max-w-6xl mx-auto">
        {children}
      </main>

      <footer className="p-4 bg-accent text-neutral-light text-center mt-12 rounded-t-lg shadow-gold">
        © 2025 Hermes Cab Booking
      </footer>
    </>
  );
}
