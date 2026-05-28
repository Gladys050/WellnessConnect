export default function ConfidentialReport() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ margin: 0, fontSize: 32, color: "#0f172a" }}>Confidential Report</h1>
      <p style={{ color: "#64748b", marginTop: 8 }}>
        Share a private update with your care team.
      </p>

      <div style={{ marginTop: 24, maxWidth: 720 }}>
        <textarea
          rows={10}
          placeholder="Write your confidential report here..."
          style={{
            width: "100%",
            padding: 16,
            borderRadius: 18,
            border: "1px solid #cbd5e1",
            resize: "vertical",
          }}
        />
        <button
          style={{
            marginTop: 18,
            padding: "14px 18px",
            borderRadius: 16,
            background: "#10b981",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          Submit Report
        </button>
      </div>
    </div>
  );
}
