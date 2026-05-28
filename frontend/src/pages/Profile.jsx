export default function Profile() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ margin: 0, fontSize: 32, color: "#0f172a" }}>Profile</h1>
      <p style={{ color: "#64748b", marginTop: 8 }}>
        Update your personal and contact details.
      </p>

      <div style={{ marginTop: 24, display: "grid", gap: 16, maxWidth: 520 }}>
        {[
          { label: "Name", value: "Jamie" },
          { label: "Email", value: "jamie@example.com" },
          { label: "Role", value: "Student" },
        ].map((field) => (
          <div key={field.label} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 18, padding: 20 }}>
            <div style={{ color: "#64748b", fontSize: 13 }}>{field.label}</div>
            <div style={{ marginTop: 6, fontSize: 16, color: "#0f172a" }}>{field.value}</div>
          </div>
        ))}
        <button
          style={{
            width: 160,
            padding: "14px 18px",
            borderRadius: 16,
            background: "#6366f1",
            color: "#ffffff",
            cursor: "pointer",
            border: "none",
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}
