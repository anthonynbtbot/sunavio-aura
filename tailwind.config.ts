import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        lg: "2.5rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        // Hero / sections — clamp() based for fluid typography
        "display-hero": [
          "clamp(2.75rem, 6vw + 1rem, 6rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "display-section": [
          "clamp(2.25rem, 4vw + 0.5rem, 4rem)",
          { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "display-sub": [
          "clamp(1.5rem, 1.5vw + 1rem, 2rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body":    ["1.0625rem", { lineHeight: "1.6" }],
        "eyebrow": ["0.75rem", { lineHeight: "1", letterSpacing: "0.15em" }],
      },
      colors: {
        // === SUNAVIO custom palette (HSL via CSS vars) ===
        bg:        "hsl(var(--bg))",
        bg2:       "hsl(var(--bg2))",
        bg3:       "hsl(var(--bg3))",
        or:        "hsl(var(--or))",
        or2:       "hsl(var(--or2))",
        "or-glow": "hsl(var(--or) / 0.15)",
        wh:        "hsl(var(--wh))",
        gr:        "hsl(var(--gr))",
        gr2:       "hsl(var(--gr2))",
        line:      "hsl(var(--line))",

        // === Shadcn semantic tokens ===
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "hero-glow":      "var(--gradient-hero-glow)",
        "text-accent":    "var(--gradient-text-accent)",
        "card-border":    "var(--gradient-card-border)",
        "cta-final-glow": "var(--gradient-cta-final)",
      },
      boxShadow: {
        cta:          "var(--shadow-cta)",
        "card-hover": "var(--shadow-card-hover)",
        elevated:     "var(--shadow-elevated)",
      },
      transitionTimingFunction: {
        "out-expo":  "cubic-bezier(0.22, 1, 0.36, 1)",
        "out-quart": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "700": "700ms",
        "1200": "1200ms",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.1" },
          "50%":      { opacity: "0.3" },
        },
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-indicator": {
          "0%":   { transform: "translateY(-50%) scaleY(0.4)", opacity: "0.4" },
          "50%":  { transform: "translateY(0)    scaleY(1)",   opacity: "1"   },
          "100%": { transform: "translateY(50%)  scaleY(0.4)", opacity: "0.4" },
        },
        "draw-line": {
          "0%":   { transform: "scaleY(0)", transformOrigin: "top" },
          "100%": { transform: "scaleY(1)", transformOrigin: "top" },
        },
      },
      animation: {
        "accordion-down":    "accordion-down 0.2s ease-out",
        "accordion-up":      "accordion-up 0.2s ease-out",
        "glow-pulse":        "glow-pulse 4s ease-in-out infinite",
        "fade-in-up":        "fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "scroll-indicator":  "scroll-indicator 2s ease-in-out infinite",
        "draw-line":         "draw-line 1.2s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
