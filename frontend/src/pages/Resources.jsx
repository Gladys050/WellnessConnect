export default function Resources() {
  const resources = [
    { title: "Mindfulness Basics", description: "Guided exercises for daily calm." },
    { title: "Stress Management", description: "Tools to reduce pressure and build resilience." },
    { title: "Self-Care Checklist", description: "Track habits that support your wellbeing." },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ margin: 0, fontSize: 32, color: "#0f172a" }}>Resources</h1>
      <p style={{ color: "#64748b", marginTop: 8 }}>
        Helpful content to support your mental wellness.
      </p>

      <div style={{ marginTop: 24, display: "grid", gap: 16, maxWidth: 720 }}>
        {resources.map((item) => (
          <div key={item.title} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 18, padding: 20 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#0f172a" }}>{item.title}</div>
            <div style={{ marginTop: 8, color: "#64748b" }}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
