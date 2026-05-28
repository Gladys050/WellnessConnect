export default function EmergencyHelp() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ margin: 0, fontSize: 32, color: "#0f172a" }}>Emergency Help</h1>
      <p style={{ color: "#64748b", marginTop: 8 }}>
        Reach out now for urgent support.
      </p>

      <div style={{ marginTop: 24, maxWidth: 720 }}>
        <div style={{ marginBottom: 18, color: "#475569" }}>
          If you are experiencing an emergency, please contact your local support line immediately.
        </div>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 18px",
            borderRadius: 16,
            background: "#ef4444",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          🚨 Request Urgent Support
        </button>
        <div style={{ marginTop: 24, display: "grid", gap: 16 }}>
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 18, padding: 20 }}>
            <div style={{ fontWeight: 700, color: "#0f172a" }}>24/7 Hotline</div>
            <div style={{ marginTop: 6, color: "#64748b" }}>Call +1 (800) 123-4567 for immediate assistance.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
