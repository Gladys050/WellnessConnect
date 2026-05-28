export default function StatCard({ title, value, detail }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: 18,
        padding: 24,
        minWidth: 180,
      }}
    >
      <div style={{ fontSize: 12, color: "#64748b", marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ fontSize: 32, fontWeight: 700, color: "#0f172a" }}>
        {value}
      </div>
      {detail ? (
        <div style={{ marginTop: 10, color: "#64748b", fontSize: 13 }}>
          {detail}
        </div>
      ) : null}
    </div>
  );
}
