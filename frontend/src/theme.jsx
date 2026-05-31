export const C = {
  dangerLight: "#FFF0F0",
  success: "#22C55E",
  successLight: "#EDFDF5",
  warning: "#F59E0B",
  warningLight: "#FFFBEB",
  bg: "#F8FAFC",
  white: "#ffffff",
  dark: "#0f172a",
  slate: "#475569",
  muted: "#64748b",
  border: "#e2e8f0",
  primary: "#6366ff",
  primaryLight: "#eef2ff",
  danger: "#dc2626",
  background: "#f8fafc",
};
export function Avatar({ name, size = 40, bg = C.primary }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: 700,
        fontSize: size * 0.38,
        flexShrink: 0,
        fontFamily: "Georgia, serif",
      }}
    >
      {name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)}
    </div>
  );
}
