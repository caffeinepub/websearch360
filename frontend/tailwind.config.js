import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        primary: {
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
          foreground: 'oklch(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
          foreground: 'oklch(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
          foreground: 'oklch(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
          foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
          foreground: 'oklch(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))'
        },
        neon: {
          cyan: 'oklch(var(--neon-cyan))',
          blue: 'oklch(var(--neon-blue))',
        },
        category: {
          politics: 'oklch(var(--cat-politics))',
          sports: 'oklch(var(--cat-sports))',
          war: 'oklch(var(--cat-war))',
          technology: 'oklch(var(--cat-technology))',
          business: 'oklch(var(--cat-business))',
          health: 'oklch(var(--cat-health))',
          science: 'oklch(var(--cat-science))',
          entertainment: 'oklch(var(--cat-entertainment))',
          national: 'oklch(var(--cat-national))',
          international: 'oklch(var(--cat-international))',
          weather: 'oklch(var(--cat-weather))',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
        'neon-sm': '0 0 10px oklch(0.82 0.2 195 / 0.3)',
        'neon-md': '0 0 20px oklch(0.82 0.2 195 / 0.4), 0 0 40px oklch(0.82 0.2 195 / 0.15)',
        'glass': '0 4px 24px oklch(0 0 0 / 0.15), inset 0 1px 0 oklch(1 0 0 / 0.05)',
        'glass-lg': '0 8px 40px oklch(0 0 0 / 0.25), inset 0 1px 0 oklch(1 0 0 / 0.08)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 oklch(0.65 0.25 25 / 0.7)' },
          '50%': { boxShadow: '0 0 0 6px oklch(0.65 0.25 25 / 0)' }
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 1.5s ease-in-out infinite',
        'fade-in': 'fade-in 0.3s ease-out forwards',
      }
    }
  },
  plugins: [typography, containerQueries, animate]
};
