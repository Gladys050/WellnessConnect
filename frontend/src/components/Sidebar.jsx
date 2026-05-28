import { C } from "../theme";

const studentNav = [
  { id: "dashboard", icon: "⊞", label: "Dashboard" },
  { id: "book", icon: "📅", label: "Book Therapist" },
  { id: "appointments", icon: "🗓", label: "My Appointments" },
  { id: "report", icon: "📋", label: "Confidential Report" },
  { id: "emergency", icon: "🚨", label: "Emergency Help", accent: true },
  { id: "resources", icon: "📚", label: "Resources" },
  { id: "profile", icon: "👤", label: "Profile" },
];

const adminNav = [
  { id: "admin", icon: "⊞", label: "Dashboard" },
  { id: "admin-appointments", icon: "📅", label: "Appointments" },
  { id: "admin-reports", icon: "📋", label: "Reports" },
  { id: "admin-users", icon: "👥", label: "Users" },
  { id: "admin-analytics", icon: "📊", label: "Analytics" },
  { id: "admin-settings", icon: "⚙️", label: "Settings" },
];

export default function Sidebar({ page, setPage, isAdmin, onLogout }) {
  const nav = isAdmin ? adminNav : studentNav;

  return (
    <div
      style={{
        width: 220,
        background: C.white,
        borderRight: `1px solid ${C.border}`,
        display: "flex",
        flexDirection: "column",
        padding: "24px 0",
        flexShrink: 0,
        minHeight: "100vh",
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "0 20px 28px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: C.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
          }}
        >
          💜
        </div>
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: 13,
              color: C.dark,
              fontFamily: "Georgia, serif",
            }}
          >
            Wellness
          </div>
          <div
            style={{
              fontWeight: 800,
              fontSize: 13,
              color: C.primary,
              fontFamily: "Georgia, serif",
            }}
          >
            Connect
          </div>
        </div>
      </div>

      {/* Nav items */}
      {nav.map((item) => (
        <button
          key={item.id}
          onClick={() => setPage(item.id)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "11px 20px",
            border: "none",
            cursor: "pointer",
            background: page === item.id ? C.primaryLight : "transparent",
            borderLeft:
              page === item.id
                ? `3px solid ${C.primary}`
                : "3px solid transparent",
            color: item.accent
              ? C.danger
              : page === item.id
                ? C.primary
                : C.slate,
            fontWeight: page === item.id ? 700 : 500,
            fontSize: 13,
            textAlign: "left",
            transition: "all 0.15s",
          }}
        >
          <span>{item.icon}</span>
          {item.label}
        </button>
      ))}

      <div style={{ flex: 1 }} />

      <button
        onClick={onLogout}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "11px 20px",
          border: "none",
          cursor: "pointer",
          background: "transparent",
          color: C.muted,
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        <span>↩</span> Logout
      </button>
    </div>
  );
}
