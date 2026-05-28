import StatCard from "../components/StatCard";

export default function AdminDashboard() {
  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 32, color: "#0f172a" }}>
            Admin Dashboard
          </h1>
          <p style={{ color: "#64748b", marginTop: 8 }}>
            Monitor overall wellness activity and trends.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: 24 }}>
        <StatCard title="Active Users" value="1,295" detail="Tracking weekly engagement" />
        <StatCard title="Open Reports" value="28" detail="Recent confidential follow-ups" />
        <StatCard title="Appointments" value="72" detail="Scheduled for this week" />
      </div>

      <div style={{ marginTop: 32, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <div style={{ background: "#ffffff", padding: 24, borderRadius: 18, border: "1px solid #e2e8f0" }}>
          <h2 style={{ fontSize: 18, margin: 0, color: "#0f172a" }}>Key priorities</h2>
          <ul style={{ marginTop: 14, color: "#475569", lineHeight: 1.8 }}>
            <li>Review pending student reports.</li>
            <li>Confirm wellness staff availability.</li>
            <li>Monitor resource usage and feedback.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
