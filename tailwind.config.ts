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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				marzipan: '#F1E9D0',
				brandRed: '#ae2012',
				brandBlue: '#186074',
				primary: {
					DEFAULT: '#186074', // Using brandBlue as primary
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#F1E9D0', // Using marzipan as secondary
					foreground: '#333333'
				},
				accent: {
					DEFAULT: '#ae2012', // Using brandRed as accent
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(15px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-up': {
					'0%': { transform: 'scale(0.98)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'pulse-slow': {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.05)', opacity: '0.9' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-up': 'slide-up 0.7s ease-out forwards',
				'scale-up': 'scale-up 0.5s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite'
			},
			fontFamily: {
				'body': ['Mulish', 'system-ui', 'sans-serif'],
				'display': ['Questrial', 'system-ui', 'sans-serif']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-subtle': 'linear-gradient(to right, #e6e9f0 0%, #eef1f5 100%)'
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
