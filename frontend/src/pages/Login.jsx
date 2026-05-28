import { useState } from "react";
import { saveSession } from "../api";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const role = email.toLowerCase().includes("admin") ? "admin" : "student";
    const user = {
      name: email ? email.split("@")[0] : "Guest",
      role,
    };
    saveSession("demo-token", user);
    onLogin(user);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
        padding: 24,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: 360,
          background: "#ffffff",
          borderRadius: 24,
          padding: 32,
          boxShadow: "0 24px 80px rgba(15, 23, 42, 0.08)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 28, color: "#0f172a" }}>
          WellnessConnect
        </h1>
        <p style={{ color: "#64748b", marginTop: 8, marginBottom: 28 }}>
          Sign in to continue to your mental wellness dashboard.
        </p>
        <label style={{ display: "block", marginBottom: 16 }}>
          <div style={{ marginBottom: 6, color: "#475569", fontSize: 13 }}>
            Email
          </div>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="you@example.com"
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 14,
              border: "1px solid #cbd5e1",
              outline: "none",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: 24 }}>
          <div style={{ marginBottom: 6, color: "#475569", fontSize: 13 }}>
            Password
          </div>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 14,
              border: "1px solid #cbd5e1",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px 16px",
            borderRadius: 16,
            background: "#6366f1",
            color: "#ffffff",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
        <p style={{ marginTop: 20, color: "#94a3b8", fontSize: 13 }}>
          Tip: use an email containing "admin" to sign in as Administrator.
        </p>
      </form>
    </div>
  );
}
