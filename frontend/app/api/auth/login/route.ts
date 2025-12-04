import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const backend = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await backend.json();

  if (!backend.ok)
    return NextResponse.json({ error: data.message }, { status: 400 });

  const res = NextResponse.json({ success: true });

  res.cookies.set("token", data.access_token, {
    httpOnly: true,
    path: "/",
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
