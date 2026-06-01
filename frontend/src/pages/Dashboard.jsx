import StatCard from "../components/StatCard";
import { C, Avatar } from "../theme";
import { CalendarDays } from "lucide-react";
import { ClipboardPlus } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { AlarmClock } from "lucide-react";
import { Laptop } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { Headphones } from "lucide-react";

export default function Dashboard({ setPage, appointments = [] }) {
  const actions = [
    {
      icon: <CalendarDays size={20} />,

      title: "Book therapist",
      desc: "Schedule a session with our professional therapists",
      page: "book",
      bg: C.primaryLight,
      border: "#C7D2FE",
      titleColor: "#3730A3",
      descColor: "#6366F1",
    },
    {
      icon: <ClipboardPlus size={20} />,
      title: "Confidential report",
      desc: "Report an issue anonymously and get support",
      page: "report",
      bg: C.successLight,
      border: "#A7F3D0",
      titleColor: "#065F46",
      descColor: "#059669",
    },
    {
      icon: <TriangleAlert size={20} />,
      title: "Emergency help",
      desc: "Get immediate assistance when you need it most",
      page: "emergency",
      bg: C.dangerLight,
      border: "#FECACA",
      titleColor: "#991B1B",
      descColor: "#DC2626",
    },
  ];

  const upcomingAppointment = appointments[0];
  const bookedCount = appointments.length;

  return (
    <div style={{ padding: 24, maxWidth: 900, fontFamily: "inherit" }}>
      {/* Greeting */}
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 500, color: C.dark }}>
          Welcome back, Jane Doe 👋
        </h1>
        <p style={{ margin: "4px 0 0", color: C.muted, fontSize: 13 }}>
          We're here to support you — you're not alone.
        </p>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 12,
          marginBottom: 20,
        }}
      >
        <StatCard
          value={String(bookedCount)}
          label="Upcoming appointments"
          icon={<CalendarDays size={20} />}
        />
        <StatCard
          value="1"
          label="Reports submitted"
          icon={<ClipboardList size={20} />}
        />
        <StatCard
          value="24/7"
          label="Support available"
          icon={<Headphones size={20} />}
        />
        <StatCard
          value="Emergency"
          label="Get immediate help →"
          icon={<TriangleAlert size={20} />}
          accent
          onClick={() => setPage("emergency")}
        />
      </div>

      {/* Two-column cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          marginBottom: 16,
        }}
      >
        {/* Upcoming appointment */}
        <div
          style={{
            background: C.white,
            border: `0.5px solid ${C.border}`,
            borderRadius: 16,
            padding: 20,
          }}
        >
          <h3
            style={{
              margin: "0 0 14px",
              fontSize: 14,
              fontWeight: 500,
              color: C.dark,
            }}
          >
            Upcoming appointment
          </h3>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Avatar
              name={upcomingAppointment?.therapist || "Sarah Johnson"}
              size={46}
              bg="#EDE9FE"
              textColor="#5B21B6"
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500, color: C.dark, fontSize: 14 }}>
                {upcomingAppointment?.therapist || "Dr. Sarah Johnson"}
              </div>
              <div style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>
                Counselor
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 11,
                  color: C.muted,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <span>
                  <CalendarDays size={10} />{" "}
                  {upcomingAppointment?.date || "24 May 2025"}
                </span>
                <span>
                  <AlarmClock size={10} />{" "}
                  {upcomingAppointment?.time || "10:00 AM"}
                </span>
                <span>
                  <Laptop size={10} /> Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setPage("appointments")}
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                background: C.primary,
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontWeight: 500,
                fontSize: 12,
                whiteSpace: "nowrap",
              }}
            >
              View
            </button>
          </div>
        </div>

        {/* Wellness tip */}
        <div
          style={{
            background: "#F5F3FF",
            border: "0.5px solid #DDD6FE",
            borderRadius: 16,
            padding: 20,
            display: "flex",
            alignItems: "flex-start",
            gap: 14,
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#5B21B6",
                marginBottom: 6,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              💡 Wellness tip
            </div>
            <p
              style={{
                margin: 0,
                color: C.dark,
                fontSize: 13,
                lineHeight: 1.6,
              }}
            >
              It's okay to not be okay. Take a breath — you are stronger than
              you think.
            </p>
          </div>
          <span style={{ fontSize: 36, flexShrink: 0 }}>🧘</span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: 16,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            background: C.white,
            border: `0.5px solid ${C.border}`,
            borderRadius: 16,
            padding: 20,
          }}
        >
          <h3
            style={{
              margin: "0 0 14px",
              fontSize: 14,
              fontWeight: 500,
              color: C.dark,
            }}
          >
            Booked appointments
          </h3>
          {appointments.length === 0 ? (
            <p style={{ margin: 0, color: C.muted, fontSize: 13 }}>
              You don't have any appointments yet. Book a session to get
              started.
            </p>
          ) : (
            <div style={{ display: "grid", gap: 12 }}>
              {appointments.map((appointment) => (
                <div
                  key={`${appointment.date}-${appointment.time}-${appointment.therapist}`}
                  style={{
                    background: "#F8FAFC",
                    borderRadius: 14,
                    padding: 16,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: C.dark }}>
                      {appointment.therapist}
                    </div>
                    <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>
                      {appointment.date} · {appointment.time}
                    </div>
                  </div>
                  <button
                    onClick={() => setPage("appointments")}
                    style={{
                      padding: "8px 12px",
                      borderRadius: 10,
                      border: "none",
                      background: C.primary,
                      color: "#fff",
                      cursor: "pointer",
                      fontSize: 11,
                    }}
                  >
                    View all
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div
          style={{
            background: C.white,
            border: `0.5px solid ${C.border}`,
            borderRadius: 16,
            padding: 20,
          }}
        >
          <h3
            style={{
              margin: "0 0 14px",
              fontSize: 14,
              fontWeight: 500,
              color: C.dark,
            }}
          >
            Quick actions
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 12,
            }}
          >
            {actions.map((a) => (
              <div
                key={a.page}
                onClick={() => setPage(a.page)}
                style={{
                  background: a.bg,
                  border: `0.5px solid ${a.border}`,
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
                <div style={{ fontSize: 20, marginBottom: 10 }}>{a.icon}</div>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: 13,
                    color: a.titleColor,
                    marginBottom: 4,
                  }}
                >
                  {a.title}
                </div>
                <div
                  style={{ fontSize: 11, color: a.descColor, lineHeight: 1.5 }}
                >
                  {a.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
