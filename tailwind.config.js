/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  future: {
    // Wrap every `hover:` / `group-hover:` variant in @media (hover: hover)
    // so iOS Safari and other touch devices don't lock into a sticky hover
    // state on first tap.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0908",
          50: "#1A1715",
          100: "#15110F",
          900: "#050403",
        },
        bone: {
          DEFAULT: "#F4ECD8",
          50: "#FBF7EE",
          100: "#F4ECD8",
          200: "#E6DBC2",
          300: "#C9BFA4",
          400: "#9F957C",
        },
        plasma: {
          DEFAULT: "#FF5E1F",
          400: "#FF7A4A",
          500: "#FF5E1F",
          600: "#E04A0F",
        },
        acid: {
          DEFAULT: "#C0E218",
          400: "#D2F048",
          500: "#C0E218",
          600: "#9BB80F",
        },
        lavender: {
          DEFAULT: "#847FE3",
          400: "#A19DEE",
          500: "#847FE3",
          600: "#6862C9",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        crush: "-0.08em",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 80s linear infinite",
        "marquee-reverse": "marquee-reverse 50s linear infinite",
        "spin-slow": "spin 22s linear infinite",
        glitch: "glitch 2.5s infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        flicker: "flicker 4s linear infinite",
        scan: "scan 4s linear infinite",
        breathe: "breathe 5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0,0)" },
          "20%": { transform: "translate(-1px,1px)" },
          "40%": { transform: "translate(1px,-1px)" },
          "60%": { transform: "translate(-1px,-1px)" },
          "80%": { transform: "translate(1px,1px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%, 18%, 22%, 25%, 53%, 57%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.4" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(244,236,216,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,236,216,0.06) 1px, transparent 1px)",
        "grid-fine":
          "linear-gradient(to right, rgba(244,236,216,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,236,216,0.04) 1px, transparent 1px)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
