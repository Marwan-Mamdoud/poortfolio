import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0b1326",
          dim: "#0b1326",
          bright: "#31394d",
          "container-lowest": "#060e20",
          "container-low": "#131b2e",
          container: "#171f33",
          "container-high": "#222a3d",
          "container-highest": "#2d3449",
        },
        primary: {
          DEFAULT: "#97d4aa",
          container: "#004526",
          fixed: "#b2f1c5",
          "fixed-dim": "#97d4aa",
        },
        secondary: {
          DEFAULT: "#bcc7de",
          container: "#3e495d",
        },
        tertiary: {
          DEFAULT: "#98da27",
          container: "#2a4200",
          fixed: "#b2f746",
          "fixed-dim": "#98da27",
        },
        "on-surface": {
          DEFAULT: "#dae2fd",
          variant: "#c0c9bf",
        },
        "on-primary": "#00391e",
        "on-secondary": "#263143",
        "on-tertiary": "#213600",
        outline: {
          DEFAULT: "#8a938a",
          variant: "#404942",
        },
        background: "#0b1326",
        foreground: "#dae2fd",
        border: {
          DEFAULT: "#404942",
        },
        error: {
          DEFAULT: "#ffb4ab",
          container: "#93000a",
        },
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "section-gap": "120px",
        base: "8px",
        "margin-mobile": "20px",
        gutter: "24px",
        "margin-desktop": "64px",
        "container-max": "1280px",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-lg": [
          "64px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "900",
          },
        ],
        "display-lg-mobile": [
          "40px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            fontWeight: "900",
          },
        ],
        "headline-md": [
          "32px",
          {
            lineHeight: "1.3",
            fontWeight: "800",
          },
        ],
        "headline-sm": [
          "24px",
          {
            lineHeight: "1.4",
            fontWeight: "800",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "1.6",
            fontWeight: "500",
          },
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "1.6",
            fontWeight: "500",
          },
        ],
        "code-sm": [
          "14px",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "label-caps": [
          "12px",
          {
            lineHeight: "1",
            letterSpacing: "0.1em",
            fontWeight: "800",
          },
        ],
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "40%": { transform: "translate(-3px, -3px)" },
          "60%": { transform: "translate(3px, 3px)" },
          "80%": { transform: "translate(3px, -3px)" },
          "100%": { transform: "translate(0)" },
        },
        "glitch-color": {
          "0%": { textShadow: "2px 0 #97d4aa, -2px 0 #98da27" },
          "25%": { textShadow: "-2px 0 #97d4aa, 2px 0 #98da27" },
          "50%": { textShadow: "2px -2px #97d4aa, -2px 2px #98da27" },
          "75%": { textShadow: "-2px 2px #97d4aa, 2px -2px #98da27" },
          "100%": { textShadow: "2px 0 #97d4aa, -2px 0 #98da27" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(151,212,170,0.3), 0 0 20px rgba(151,212,170,0.1)",
          },
          "50%": {
            boxShadow: "0 0 10px rgba(151,212,170,0.5), 0 0 40px rgba(151,212,170,0.2)",
          },
        },
        "float-particle": {
          "0%, 100%": { transform: "translateY(0) translateX(0)", opacity: "0.3" },
          "25%": { transform: "translateY(-20px) translateX(10px)", opacity: "0.7" },
          "50%": { transform: "translateY(-40px) translateX(-5px)", opacity: "0.5" },
          "75%": { transform: "translateY(-20px) translateX(15px)", opacity: "0.8" },
        },
        "grid-scroll": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 50px" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(151,212,170,0.3)" },
          "50%": { borderColor: "rgba(151,212,170,0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        glitch: "glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite",
        "glitch-color": "glitch-color 0.3s linear infinite",
        scanline: "scanline 8s linear infinite",
        typewriter: "typewriter 3s steps(60) 1s forwards",
        blink: "blink 0.7s step-end infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float-particle": "float-particle 6s ease-in-out infinite",
        "grid-scroll": "grid-scroll 20s linear infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "slide-in-left": "slide-in-left 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
        "border-glow": "border-glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}

export default config;
