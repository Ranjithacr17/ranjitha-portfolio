export const lightTheme = {
  background: "#ffffff",
  text: "#333333",
  primary: "#ff6b6b",
  secondary: "#4ecdc4",
  accent: "#ffb174",
  muted: "#f0f0f0",
  border: "#e0e0e0",
  cardBg: "#ffffff",
  navBg: "rgba(255, 255, 255, 0.8)",
  shadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  gradient: "linear-gradient(135deg, #ff6b6b 0%, #ffb174 100%)",
}

export const darkTheme = {
  background: "#1a1a2e",
  text: "#f0f0f0",
  primary: "#ff6b6b",
  secondary: "#4ecdc4",
  accent: "#ffb174",
  muted: "#2a2a40",
  border: "#3a3a50",
  cardBg: "#2a2a40",
  navBg: "rgba(26, 26, 46, 0.8)",
  shadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  gradient: "linear-gradient(135deg, #ff6b6b 0%, #ffb174 100%)",
}

export type Theme = typeof lightTheme
