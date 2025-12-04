"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FDF7E3] text-[#3A2E1E]">
        {/* ⭐ White Banner Placeholder */}
      <section className="mt-16 w-full">
        <div className="max-w-6xl mx-auto h-72 md:h-96 rounded-2xl bg-white shadow-md border border-[#E6E0CC]">
    
      

        <p className="max-w-2xl text-lg mt-4 text-[#6A563A]">
          Experience luxury, speed, and reliability — inspired by the Greek god of swift travel.
          Your premium cab service awaits.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-10 flex-wrap justify-center">
          <Link
            href="/login"
            className="px-6 py-3 bg-[#C89A00] text-white rounded-lg shadow-lg hover:bg-[#A67A00] transition"
          >
            🚖 Book a Cab
          </Link>
</div>
        </div>
      </section>
    </main>
  );
}
