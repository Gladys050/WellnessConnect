export const C = {
  // Neutrals
  bg: "#F8FAFC",
  white: "#ffffff",
  dark: "#0f172a",
  slate: "#475569",
  muted: "#64748b",
  border: "#e2e8f0",

  // Brand
  primary: "#4F46E5",
  primaryHover: "#4338CA",
  primaryLight: "#EEF2FF",

  // Semantic
  success: "#22C55E",
  successLight: "#ECFDF5",
  warning: "#F59E0B",
  warningLight: "#FFFBEB",
  danger: "#DC2626",
  dangerLight: "#FEF2F2",
};

export function Avatar({
  name,
  size = 40,
  bg = "#EDE9FE",
  textColor = "#5B21B6",
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

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
        color: textColor,
        fontWeight: 500,
        fontSize: size * 0.36,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}
