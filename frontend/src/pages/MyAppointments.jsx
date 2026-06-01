export default function MyAppointments({ appointments = [] }) {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ margin: 0, fontSize: 32, color: "#0f172a" }}>
        My Appointments
      </h1>
      <p style={{ color: "#64748b", marginTop: 8 }}>
        Review upcoming sessions and appointment details.
      </p>

      <div style={{ marginTop: 24, display: "grid", gap: 16, maxWidth: 720 }}>
        {appointments.map((item) => (
          <div
            key={`${item.date}-${item.time}`}
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 18,
              padding: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}
                >
                  {item.date}
                </div>
                <div style={{ color: "#64748b", marginTop: 4 }}>
                  {item.time}
                </div>
              </div>
              <div style={{ color: "#475569" }}>{item.therapist}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
