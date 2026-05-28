export default function Topbar({ user }) {
  const label = user.role === "admin" ? "Administrator" : "Student";

  return (
    <div
      style={{
        padding: "18px 24px",
        borderBottom: "1px solid #e2e8f0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ffffff",
      }}
    >
      <div>
        <div style={{ fontSize: 14, color: "#475569" }}>Welcome back,</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a" }}>
          {user.name}
        </div>
      </div>
      <div
        style={{
          padding: "10px 14px",
          borderRadius: 999,
          background: "#eef2ff",
          color: "#4338ca",
          fontWeight: 700,
          fontSize: 13,
        }}
      >
        {label}
      </div>
    </div>
  );
}
