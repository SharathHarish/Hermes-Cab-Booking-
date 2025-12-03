// pages/signup.js
import { useState } from "react";
import { useRouter } from "next/router";
import api from "../utils/api";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      if (res.status === 200 || res.status === 201) {
        alert("Signup success. Please login.");
        router.push("/login");
      } else {
        alert("Signup failed");
      }
    } catch (err) {
      alert(err.response?.data?.detail || "Signup error");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} placeholder="Name" required />
        <input name="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} placeholder="Email" required />
        <input type="password" name="password" value={form.password} onChange={e=>setForm({...form, password: e.target.value})} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
