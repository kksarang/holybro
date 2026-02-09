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
          light: "#1F5F8B", // Medium Blue as light variant
          DEFAULT: "#0B3C5D", // Dark Blue (Main Brand)
          dark: "#082D46",  // Darker shade
        },
        secondary: {
          light: "#3F82B3",
          DEFAULT: "#1F5F8B", // Medium Blue
          dark: "#154466",
        },
        industrial: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#1C1C1C", // Dark Grey / Black (Text Color)
          950: "#0B0B0B", // Darker Black for backgrounds
        },
        accent: {
          cyan: "#1F5F8B", // Remapped to Medium Blue to enforce brand consistency
          amber: "#F59E0B", // Warning colors kept for utility
          lime: "#84CC16",  // Success colors kept for utility
        },
        background: {
          DEFAULT: "#FFFFFF", // White
          dark: "#0B0B0B",
          alt: "#F9FAFB",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#1C1C1C",
          translucent: "rgba(255, 255, 255, 0.9)",
          darkTranslucent: "rgba(28, 28, 28, 0.8)",
        },
        text: {
          primary: "#1C1C1C", // Dark Grey / Black
          secondary: "#4B5563",
          muted: "#9CA3AF",
          inverse: "#FFFFFF",
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
