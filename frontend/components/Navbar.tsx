"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FDF7E3]/80 backdrop-blur-xl border-b border-[#EADCA8] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3">
          
          {/* Golden Emblem */}
          <div className="w-10 h-10">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#D4A017" />
                </linearGradient>
              </defs>

              {/* Wings */}
              <path
                d="M8 32 C16 16, 48 16, 56 32 C48 24, 16 24, 8 32 Z"
                fill="url(#goldGrad)"
                stroke="#8B6B2C"
                strokeWidth="1"
              />
              <path
                d="M8 32 C16 40, 48 40, 56 32 C48 40, 16 40, 8 32 Z"
                fill="url(#goldGrad)"
                stroke="#8B6B2C"
                strokeWidth="1"
              />

              {/* Taxi */}
              <rect
                x="20"
                y="28"
                width="24"
                height="10"
                rx="2"
                fill="#FFD700"
                stroke="#8B6B2C"
                strokeWidth="1.5"
              />
              <rect x="22" y="30" width="4" height="4" rx="1" fill="#3E2F1C" />
              <rect x="38" y="30" width="4" height="4" rx="1" fill="#3E2F1C" />
            </svg>
          </div>

          {/* Text */}
          <span className="text-2xl md:text-3xl font-serif font-bold text-[#C89A00] drop-shadow">
            Hermes Cabs
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavItem name="Home" href="/" />
          <NavItem name="About" href="/about" />
          <NavItem name="Contact" href="/contact" />
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#C89A00] text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#FDF7E3] border-t border-[#EADCA8] px-6 py-4 space-y-3">
          <MobileItem name="Home" href="/" />
          <MobileItem name="Book a Cab" href="/booking" />
          <MobileItem name="About" href="/about" />
          <MobileItem name="Contact" href="/contact" />
        </div>
      )}
    </nav>
  );
}

function NavItem({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      className="text-[#7A673E] hover:text-[#C89A00] transition font-medium"
    >
      {name}
    </Link>
  );
}

function MobileItem({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      className="block text-[#7A673E] text-lg hover:text-[#C89A00] transition"
    >
      {name}
    </Link>
  );
}
