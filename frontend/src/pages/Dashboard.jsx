import StatCard from "../components/StatCard";

export default function Dashboard({ setPage }) {
  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 32, color: "#0f172a" }}>
            Student Dashboard
          </h1>
          <p style={{ color: "#64748b", marginTop: 8 }}>
            Your wellness overview and next steps.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: 24 }}>
        <StatCard title="Appointments" value="4" detail="Next session in 2 days" />
        <StatCard title="Reports" value="1" detail="Shared with your counselor" />
        <StatCard title="Resources" value="12" detail="New articles available" />
      </div>

      <div style={{ marginTop: 32, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {[
          { label: "Book Therapist", page: "book" },
          { label: "My Appointments", page: "appointments" },
          { label: "Confidential Report", page: "report" },
        ].map((item) => (
          <button
            key={item.page}
            onClick={() => setPage(item.page)}
            style={{
              padding: 22,
              borderRadius: 18,
              border: "1px solid #e2e8f0",
              background: "#ffffff",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>{item.label}</div>
            <div style={{ marginTop: 6, color: "#64748b", fontSize: 13 }}>
              Manage your wellness schedule and progress.
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
