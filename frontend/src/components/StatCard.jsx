import { C } from "../theme";

export default function StatCard({ value, label, icon, accent, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: accent ? "#EEF0FF" : C.white,
        border: `0.5px solid ${accent ? "#C7D2FE" : C.border}`,
        borderRadius: 16,
        padding: 16,
        cursor: onClick ? "pointer" : "default",
        transition: onClick ? "transform 0.15s" : undefined,
      }}
      onMouseEnter={(e) => {
        if (onClick) e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        if (onClick) e.currentTarget.style.transform = "none";
      }}
    >
      <div style={{ fontSize: 20, marginBottom: 8 }}>{icon}</div>
      <div
        style={{
          fontSize: 22,
          fontWeight: 500,
          color: accent ? "#4338CA" : C.dark,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 12,
          color: accent ? "#4338CA" : C.muted,
          marginTop: 3,
        }}
      >
        {label}
      </div>
    </div>
  );
}
