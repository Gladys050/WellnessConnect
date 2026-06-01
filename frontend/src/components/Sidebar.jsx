import { C } from "../theme";
import { LayoutDashboard } from "lucide-react";
import { CalendarPlus } from "lucide-react";
import { ClipboardClock } from "lucide-react";
import { ClipboardPlus } from "lucide-react";
import { Siren } from "lucide-react";
import { LibraryBig } from "lucide-react";
import { UserPen } from "lucide-react";
import { Users } from "lucide-react";
import { FileChartColumnIncreasing } from "lucide-react";
import { Settings } from "lucide-react";

const studentNav = [
  {
    id: "dashboard",
    icon: <LayoutDashboard size={16} />,
    label: "Dashboard",
  },
  {
    id: "book",
    icon: <CalendarPlus size={16} />,
    label: "Book Therapist",
  },
  {
    id: "appointments",
    icon: <ClipboardClock size={16} />,
    label: "My Appointments",
  },
  {
    id: "report",
    icon: <ClipboardPlus size={16} />,
    label: "Confidential Report",
  },
  {
    id: "emergency",
    icon: <Siren size={16} />,
    label: "Emergency Help",
    accent: true,
  },
  { id: "resources", icon: <LibraryBig size={16} />, label: "Resources" },
  { id: "profile", icon: <UserPen size={16} />, label: "Profile" },
];

const adminNav = [
  { id: "admin", icon: <LayoutDashboard size={16} />, label: "Dashboard" },
  {
    id: "admin-appointments",
    icon: <ClipboardClock size={16} />,
    label: "Appointments",
  },
  { id: "admin-reports", icon: <CalendarPlus size={16} />, label: "Reports" },
  { id: "admin-users", icon: <Users size={16} />, label: "Users" },
  {
    id: "admin-analytics",
    icon: <FileChartColumnIncreasing size={16} />,
    label: "Analytics",
  },
  {
    id: "admin-settings",
    icon: <Settings size={16} />,
    label: "Settings",
  },
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
