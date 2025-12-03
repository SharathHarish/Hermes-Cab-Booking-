// pages/login.js
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import api from "../utils/api";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      if (res.data.access_token) {
        localStorage.setItem("token", res.data.access_token);
        // try to set user from response or fetch /auth/me
        if (res.data.user) setUser(res.data.user);
        else {
          const me = await api.get("/auth/me");
          setUser(me.data.user);
        }
        router.push("/book-ride");
      } else {
        alert("Login failed");
      }
    } catch (err) {
      alert(err.response?.data?.detail || "Login error");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" required /></div>
        <div><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" required /></div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
