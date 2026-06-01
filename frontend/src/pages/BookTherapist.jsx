export default function BookTherapist({ setAppointments }) {
  const therapists = [
    {
      name: "Dr. Aisha Khan",
      specialty: "Cognitive Behavioral Therapy",
      date: "June 16",
      time: "11:00 AM",
    },
    {
      name: "Jordan Lee",
      specialty: "Stress Management",
      date: "June 18",
      time: "2:30 PM",
    },
    {
      name: "Taylor Hart",
      specialty: "Mindfulness Coaching",
      date: "June 20",
      time: "4:00 PM",
    },
  ];

  function handleBook(therapist) {
    setAppointments((prev) => [
      ...prev,
      { date: therapist.date, time: therapist.time, therapist: therapist.name },
    ]);
  }

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ margin: 0, fontSize: 32, color: "#0f172a" }}>
        Book Therapist
      </h1>
      <p style={{ color: "#64748b", marginTop: 8 }}>
        Choose a therapist and reserve a session slot.
      </p>

      <div style={{ marginTop: 24, display: "grid", gap: 16 }}>
        {therapists.map((therapist) => (
          <div
            key={therapist.name}
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
                gap: 12,
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{ fontSize: 17, fontWeight: 700, color: "#0f172a" }}
                >
                  {therapist.name}
                </div>
                <div style={{ color: "#64748b", marginTop: 4 }}>
                  {therapist.specialty}
                </div>
              </div>
              <button
                onClick={() => handleBook(therapist)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 14,
                  background: "#6366f1",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
