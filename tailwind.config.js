/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Libre Baskerville", "serif"], // Baskerville everywhere
      },
      fontSize: {
        base: "1.125rem", // 18px (bigger default body text)
        lg: "1.25rem",    // 20px
        xl: "1.5rem",     // 24px
        "2xl": "1.875rem", // 30px
        "3xl": "2.25rem", // 36px
        "4xl": "2.75rem", // 44px
        "5xl": "3.25rem", // 52px
      },
      colors: {
        military: {
          DEFAULT: "#4B5320",
          dark: "#3B3F1F",
        },
        khaki: {
          light: "#F0EAD6",
          DEFAULT: "#E5DAC5",
        },
        soil: {
          DEFAULT: "#3B2F2F",
        },
        olive: {
          DEFAULT: "#6B8E23",
        },
      },
    },
  },
  plugins: [],
}
