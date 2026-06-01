import { Avatar, C } from "../theme";

const therapists = [
  {
    name: "Dr. Aisha Khan",
    specialty: "Cognitive Behavioral Therapy",
    date: "June 16",
    time: "11:00 AM",
    mode: "Online",
    avatarBg: "#EDE9FE",
    avatarColor: "#5B21B6",
  },
  {
    name: "Jordan Lee",
    specialty: "Stress Management",
    date: "June 18",
    time: "2:30 PM",
    mode: "In-person",
    avatarBg: "#ECFDF5",
    avatarColor: "#065F46",
  },
  {
    name: "Taylor Hart",
    specialty: "Mindfulness Coaching",
    date: "June 20",
    time: "4:00 PM",
    mode: "Online",
    avatarBg: "#EEF2FF",
    avatarColor: "#3730A3",
  },
];

export default function BookTherapist({ setAppointments }) {
  function handleBook(therapist) {
    setAppointments((prev) => [
      ...prev,
      { date: therapist.date, time: therapist.time, therapist: therapist.name },
    ]);
  }

  return (
    <div style={{ padding: 24, maxWidth: 900 }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 500, color: C.dark }}>
          Book a therapist
        </h1>
        <p style={{ margin: "4px 0 0", fontSize: 13, color: C.muted }}>
          Choose a therapist and reserve a session slot.
        </p>
      </div>

      {/* Therapist cards */}
      <div style={{ display: "grid", gap: 12 }}>
        {therapists.map((t) => (
          <div
            key={t.name}
            style={{
              background: C.white,
              border: `0.5px solid ${C.border}`,
              borderRadius: 16,
              padding: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {/* Avatar */}
              <Avatar
                name={t.name}
                size={46}
                bg={t.avatarBg}
                textColor={t.avatarColor}
              />

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: C.dark }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>
                  {t.specialty}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    fontSize: 11,
                    color: C.muted,
                  }}
                >
                  <span>📅 {t.date}</span>
                  <span>⏰ {t.time}</span>
                  <span>💻 {t.mode}</span>
                </div>
              </div>

              {/* Book button */}
              <button
                onClick={() => handleBook(t)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: C.primary,
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = C.primaryHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = C.primary)
                }
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
