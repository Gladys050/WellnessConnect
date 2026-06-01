import { useState } from "react";
import { clearSession, getUser } from "./api";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BookTherapist from "./pages/BookTherapist";
import MyAppointments from "./pages/MyAppointments";
import ConfidentialReport from "./pages/ConfidentialReport";
import EmergencyHelp from "./pages/EmergencyHelp";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";

function PlaceholderPage({ title }) {
  return (
    <div style={{ padding: 28 }}>
      <h2 style={{ fontFamily: "Georgia, serif", color: "#0F172A" }}>
        {title}
      </h2>
      <p style={{ color: "#94A3B8" }}>
        Connect to MySQL to populate this section.
      </p>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(getUser);
  const [isAdmin, setIsAdmin] = useState(user?.role === "admin");
  const [page, setPage] = useState(
    user?.role === "admin" ? "admin" : "dashboard",
  );
  const [appointments, setAppointments] = useState([
    { date: "June 2", time: "10:00 AM", therapist: "Dr. Aisha Khan" },
    { date: "June 9", time: "2:00 PM", therapist: "Jordan Lee" },
  ]);

  function handleLogin(u) {
    setUser(u);
    setIsAdmin(u.role === "admin");
    setPage(u.role === "admin" ? "admin" : "dashboard");
  }

  function handleLogout() {
    clearSession();
    setUser(null);
    setPage("dashboard");
    setIsAdmin(false);
  }

  if (!user) return <Login onLogin={handleLogin} />;

  const PAGES = {
    dashboard: <Dashboard setPage={setPage} appointments={appointments} />,
    book: <BookTherapist setAppointments={setAppointments} />,
    appointments: <MyAppointments appointments={appointments} />,
    report: <ConfidentialReport />,
    emergency: <EmergencyHelp />,
    resources: <Resources />,
    profile: <Profile />,
    admin: <AdminDashboard />,
    "admin-appointments": <MyAppointments appointments={appointments} />,
    "admin-reports": <ConfidentialReport />,
    "admin-users": <PlaceholderPage title="User Management" />,
    "admin-analytics": <AdminDashboard />,
    "admin-settings": <PlaceholderPage title="Settings" />,
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
        background: "#F8FAFC",
      }}
    >
      <Sidebar
        page={page}
        setPage={setPage}
        isAdmin={isAdmin}
        onLogout={handleLogout}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <Topbar
          user={{
            name: user.name,
            role: isAdmin ? "Administrator" : "Student",
          }}
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
          setPage={setPage}
        />
        <div style={{ flex: 1, overflowY: "auto" }}>
          {PAGES[page] ?? <Dashboard setPage={setPage} />}
        </div>
      </div>
    </div>
  );
}
