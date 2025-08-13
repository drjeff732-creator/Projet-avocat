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
			padding: '1rem',
			screens: {
				'2xl': '1280px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
				heading: ['Montserrat', 'sans-serif'],
			},
			colors: {
				border: 'hsl(0 0% 89%)',
				input: 'hsl(0 0% 89%)',
				ring: 'hsl(220 13% 46%)',
				background: 'hsl(0 0% 100%)',
				foreground: 'hsl(0 0% 13%)',
				primary: {
					DEFAULT: 'hsl(210 100% 50%)',
					foreground: 'hsl(0 0% 100%)',
				},
				secondary: {
					DEFAULT: 'hsl(210 20% 98%)',
					foreground: 'hsl(224 71% 37%)',
				},
				destructive: {
					DEFAULT: 'hsl(0 84% 60%)',
					foreground: 'hsl(0 0% 100%)',
				},
				muted: {
					DEFAULT: 'hsl(210 20% 98%)',
					foreground: 'hsl(220 9% 46%)',
				},
				accent: {
					DEFAULT: 'hsl(210 100% 50%)',
					foreground: 'hsl(0 0% 100%)'
				},
				cta: {
					DEFAULT: 'hsl(var(--cta))',
					foreground: 'hsl(var(--cta-foreground))'
				},
				footer: {
					DEFAULT: 'hsl(var(--footer))',
					foreground: 'hsl(var(--footer-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
