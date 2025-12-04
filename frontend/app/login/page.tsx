"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Login failed");
      return;
    }

    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-6 py-20">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-amber-400/30 rounded-2xl shadow-2xl p-10">

        <div className="flex items-center justify-center space-x-3 mb-8">
          <span className="text-amber-400 text-4xl">🚕</span>
          <h1 className="text-3xl font-bold text-amber-300 tracking-wide">
            Login
          </h1>
        </div>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <div className="space-y-5">
          <input
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-amber-400/20"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />

          <input
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-amber-400/20"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-amber-500 text-black font-semibold py-3 rounded-lg hover:bg-amber-400 transition"
        >
          Login
        </button>

        <div className="text-center mt-6 text-gray-300 text-sm">
          <p>
            Don't have an account?
            <a href="/register" className="text-amber-400 hover:underline"> Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}
