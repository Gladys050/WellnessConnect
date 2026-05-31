import { useState } from "react";
import { C } from "../theme";
import { api, saveSession } from "../api";

export default function Login({ onLogin }) {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!email || !password)
      return setError("Please enter email and password.");
    setLoading(true);
    setError("");
    try {
      const { token, user } = await api.auth.login(email, password);
      saveSession(token, user);
      onLogin(user);
    } catch (err) {
      // For demo purposes fall back to local login
      const demoUser = {
        name: role === "admin" ? "Admin User" : "Jane Doe",
        role,
        email,
        studentId: "STU-2024-0892",
        major: "Psychology",
        year: "3rd Year",
      };
      saveSession("demo-token", demoUser);
      onLogin(demoUser);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #EEF0FF 0%, #F5F3FF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: C.white,
          borderRadius: 20,
          padding: 40,
          width: 380,
          boxShadow: "0 20px 60px rgba(108,99,255,0.15)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>💜</div>
          <h1
            style={{
              margin: "0 0 4px",
              fontFamily: "Georgia, serif",
              color: C.dark,
              fontSize: 24,
            }}
          >
            Wellness Connect
          </h1>
          <p style={{ margin: 0, color: C.muted, fontSize: 14 }}>
            Student Support System
          </p>
        </div>

        {/* Role toggle */}
        <div
          style={{
            display: "flex",
            gap: 0,
            marginBottom: 22,
            background: C.bg,
            borderRadius: 10,
            padding: 4,
          }}
        >
          {["student", "admin"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              style={{
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: role === r ? C.white : "transparent",
                color: role === r ? C.primary : C.muted,
                fontWeight: role === r ? 700 : 500,
                fontSize: 13,
                boxShadow: role === r ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                transition: "all 0.15s",
              }}
            >
              {r === "student" ? "👤 Student" : "🔧 Admin"}
            </button>
          ))}
        </div>

        {/* Fields */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          style={{
            width: "100%",
            padding: "11px 14px",
            borderRadius: 10,
            border: `1px solid ${C.border}`,
            fontSize: 14,
            marginBottom: 12,
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Password"
          type="password"
          style={{
            width: "100%",
            padding: "11px 14px",
            borderRadius: 10,
            border: `1px solid ${C.border}`,
            fontSize: 14,
            marginBottom: 8,
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        {error && (
          <div style={{ color: C.danger, fontSize: 12, marginBottom: 10 }}>
            {error}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px 0",
            borderRadius: 10,
            marginTop: 8,
            background: loading ? C.muted : C.primary,
            color: "#fff",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          {loading ? "Signing in…" : "Sign In →"}
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: 14,
            fontSize: 12,
            color: C.muted,
          }}
        >
          Demo: any credentials work ·{" "}
          <span style={{ color: C.primary, cursor: "pointer" }}>
            Forgot password?
          </span>
        </div>
      </div>
    </div>
  );
}
