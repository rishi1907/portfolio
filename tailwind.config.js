module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "bg-900": "#0b0d10",
        "panel": "rgba(255,255,255,0.03)",
        "muted": "#9aa4b2",
        "accent": "#66f0c2",
        "accent-2": "#60a5fa"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2,6,23,0.6)",
      },
      borderRadius: {
        lg2: "14px",
      }
    },
  },
  plugins: [],
}
