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
          light: "#3B82F6", // Vivid Blue
          DEFAULT: "#2563EB", // Royal Blue
          dark: "#1E40AF",  // Deep Blue
        },
        secondary: {
          light: "#64748B", // Slate 500
          DEFAULT: "#475569", // Slate 600
          dark: "#334155", // Slate 700
        },
        industrial: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B", // Main Dark BG
          900: "#0F172A", // Darker Contrast
          950: "#020617", // Almost Black
        },
        accent: {
          cyan: "#06B6D4",
          amber: "#F59E0B",
          lime: "#84CC16",
        },
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#0F172A",
          alt: "#F8FAFC",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#1E293B",
          translucent: "rgba(255, 255, 255, 0.9)",
          darkTranslucent: "rgba(15, 23, 42, 0.8)",
        },
        text: {
          primary: "#1E293B",
          secondary: "#475569",
          muted: "#94A3B8",
          inverse: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(37, 99, 235, 0.3)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'industrial': '0 2px 10px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'slow-zoom': 'zoom 20s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'reveal': 'reveal 1s cubic-bezier(0.77, 0, 0.175, 1) 0.5s forwards',
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
