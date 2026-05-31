import StatCard from "../components/StatCard";
import { C, Avatar } from "../theme";

export default function Dashboard({ setPage }) {
  return (
    <div style={{ padding: 28, maxWidth: 900 }}>
      {/* Greeting */}
      <div style={{ marginBottom: 24 }}>
        <h1
          style={{
            margin: 0,
            fontSize: 24,
            fontWeight: 800,
            color: C.dark,
            fontFamily: "Georgia, serif",
          }}
        >
          Welcome back, Jane Doe 👋
        </h1>
        <p style={{ margin: "4px 0 0", color: C.muted, fontSize: 14 }}>
          We are here to support you 💜
        </p>
      </div>

      {/* Stats row */}
      <div
        style={{ display: "flex", gap: 14, marginBottom: 24, flexWrap: "wrap" }}
      >
        <StatCard value="2" label="Upcoming Appointments" icon="📅" />
        <StatCard value="1" label="Reports Submitted" icon="📋" />
        <StatCard value="24/7" label="Support Available" icon="🎧" />
        <StatCard
          value="Emergency"
          label="Get immediate help"
          icon="⚠️"
          accent
          onClick={() => setPage("emergency")}
        />
      </div>

      {/* Two-column cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Upcoming appointment */}
        <div
          style={{
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: 22,
          }}
        >
          <h3
            style={{
              margin: "0 0 16px",
              fontSize: 15,
              fontWeight: 700,
              color: C.dark,
            }}
          >
            Upcoming Appointment
          </h3>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Avatar name="Sarah Johnson" size={52} bg="#A78BFA" />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: C.dark, fontSize: 15 }}>
                Dr. Sarah Johnson
              </div>
              <div style={{ color: C.muted, fontSize: 13 }}>Counselor</div>
              <div style={{ marginTop: 8, fontSize: 12, color: C.slate }}>
                📅 24 May 2025 &nbsp; ⏰ 10:00 AM &nbsp; 💻 Online Session
              </div>
            </div>
            <button
              onClick={() => setPage("appointments")}
              style={{
                padding: "8px 16px",
                borderRadius: 10,
                background: C.primary,
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Wellness tip */}
        <div
          style={{
            background: "linear-gradient(135deg, #EEF0FF 0%, #F5F3FF 100%)",
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: 22,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: C.primary,
                marginBottom: 8,
              }}
            >
              💡 Wellness Tip of the Day
            </div>
            <p
              style={{
                margin: 0,
                color: C.dark,
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              It's okay to not be okay. Take a breath — you are stronger than
              you think.
            </p>
          </div>
          <span style={{ fontSize: 56 }}>🧘</span>
        </div>
      </div>

      {/* Quick actions */}
      <div
        style={{
          marginTop: 20,
          background: C.white,
          border: `1px solid ${C.border}`,
          borderRadius: 16,
          padding: 22,
        }}
      >
        <h3
          style={{
            margin: "0 0 16px",
            fontSize: 15,
            fontWeight: 700,
            color: C.dark,
          }}
        >
          Quick Actions
        </h3>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {[
            {
              icon: "📅",
              title: "Book Therapist",
              desc: "Schedule a session with our professional therapists",
              page: "book",
              color: C.primaryLight,
              border: "#C7D2FE",
            },
            {
              icon: "📋",
              title: "Confidential Report",
              desc: "Report an issue anonymously and get support",
              page: "report",
              color: C.successLight,
              border: "#A7F3D0",
            },
            {
              icon: "⚠️",
              title: "Emergency Help",
              desc: "Get immediate assistance when you need it",
              page: "emergency",
              color: C.dangerLight,
              border: "#FCA5A5",
            },
          ].map((a) => (
            <div
              key={a.page}
              onClick={() => setPage(a.page)}
              style={{
                flex: 1,
                minWidth: 160,
                background: a.color,
                border: `1px solid ${a.border}`,
                borderRadius: 12,
                padding: 16,
                cursor: "pointer",
                transition: "transform 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <div style={{ fontSize: 24, marginBottom: 8 }}>{a.icon}</div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  color: C.dark,
                  marginBottom: 4,
                }}
              >
                {a.title}
              </div>
              <div style={{ fontSize: 12, color: C.slate }}>{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
