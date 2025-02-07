
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
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        'ocean-blue': '#0EA5E9',
        'turquoise': '#33C3F0',
        'neutral-gray': '#8E9196',
        'primary-purple': '#9b87f5',
        'secondary-purple': '#7E69AB',
        'tertiary-purple': '#6E59A5',
        'dark-purple': '#1A1F2C',
        'light-purple': '#D6BCFA',
        'soft-green': '#F2FCE2',
        'soft-yellow': '#FEF7CD',
        'soft-orange': '#FEC6A1',
        'soft-purple': '#E5DEFF',
        'soft-pink': '#FFDEE2',
        'soft-peach': '#FDE1D3',
        'soft-blue': '#D3E4FD',
        'soft-gray': '#F1F0FB',
        'vivid-purple': '#8B5CF6',
        'magenta-pink': '#D946EF',
        'bright-orange': '#F97316',
        'charcoal-gray': '#403E43',
        'medium-gray': '#8A898C',
        'bright-blue': '#1EAEDB',
        'dark-charcoal': '#221F26',
        'light-gray': '#C8C8C9',
        'silver-gray': '#9F9EA1',
        'sky-blue': '#33C3F0',
        'dark-gray': '#222222',
        'bright-blue-light': '#0FA0CE',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

