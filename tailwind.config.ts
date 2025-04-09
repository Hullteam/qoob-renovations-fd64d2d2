
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
				},
				warmBeige: {
					50: '#faf6f1',
					100: '#f2eadf',
					200: '#e8d8c3',
					300: '#dbc09e',
					400: '#cca578',
					500: '#c08c58',
					600: '#b27649',
					700: '#94603f',
					800: '#794e37',
					900: '#644230',
					950: '#352117'
				},
				teal: {
					50: '#effaf5',
					100: '#d7f2e3',
					200: '#b2e5cc',
					300: '#80d0ad',
					400: '#4eb68a',
					500: '#33a070',
					600: '#237f5a',
					700: '#1e664a',
					800: '#1b513c',
					900: '#184333',
					950: '#0a251c'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'slow-pulse': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)',
						boxShadow: '0 0 0 rgba(192, 140, 88, 0)'
					},
					'50%': {
						opacity: '0.7',
						transform: 'scale(1.05)',
						boxShadow: '0 0 20px rgba(192, 140, 88, 0.7)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slow-pulse': 'slow-pulse 1.5s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif']
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
