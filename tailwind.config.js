/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6A5AF9", // Purple Start
          DEFAULT: "#6A5AF9",
          dark: "#4D9DE0",  // Blue End (Gradient target)
        },
        secondary: {
          light: "#F3F0FF", // Light Lavender
          DEFAULT: "#8B5CF6", // Violet
          dark: "#7C3AED",
        },
        accent: {
          cyan: "#22D3EE", // Cyan
          pink: "#F472B6", // Soft Pink
          orange: "#FB923C", // Soft Orange
        },
        background: {
          DEFAULT: "#F8FAFC", // Slate-50 (Main Light BG)
          alt: "#F3F0FF", // Lavender-50 (Section Alt BG)
        },
        surface: {
          DEFAULT: "#FFFFFF",
          translucent: "rgba(255, 255, 255, 0.7)",
        },
        text: {
          primary: "#1E293B", // Slate-800
          secondary: "#64748B", // Slate-500
          muted: "#94A3B8", // Slate-400
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(106, 90, 249, 0.3)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
