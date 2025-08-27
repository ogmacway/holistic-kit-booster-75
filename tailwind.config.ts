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
				wellness: {
					primary: 'hsl(var(--wellness-primary))',
					secondary: 'hsl(var(--wellness-secondary))',
					accent: 'hsl(var(--wellness-accent))',
					light: 'hsl(var(--wellness-light))',
					dark: 'hsl(var(--wellness-dark))'
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
				},
				"color-1": "hsl(var(--color-1))",
				"color-2": "hsl(var(--color-2))",
				"color-3": "hsl(var(--color-3))",
				"color-4": "hsl(var(--color-4))",
				"color-5": "hsl(var(--color-5))"
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-section': 'var(--gradient-section)',
				'gradient-pink': 'var(--gradient-pink)',
				'gradient-cta': 'var(--gradient-cta)'
			},
			boxShadow: {
				'wellness': 'var(--shadow-wellness)',
				'card-wellness': 'var(--shadow-card)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
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
				'pulse-slow': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.008)',
						opacity: '0.99'
					}
				},
				'zoom-breath': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.05)'
					}
				},
				'scale-pulse': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.08)'
					}
				},
				'breathe-slow': {
					'0%': {
						transform: 'scale(1)'
					},
					'25%': {
						transform: 'scale(1.04)'
					},
					'45%': {
						transform: 'scale(1.08)'
					},
					'50%': {
						transform: 'scale(1.08)'
					},
					'55%': {
						transform: 'scale(1.08)'
					},
					'75%': {
						transform: 'scale(1.04)'
					},
					'95%': {
						transform: 'scale(1)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				'rainbow': {
					'0%': { 'background-position': '0%' },
					'100%': { 'background-position': '200%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse-slow 20s ease-in-out infinite',
				'zoom-breath': 'zoom-breath 20s ease-in-out infinite',
				'scale-pulse': 'scale-pulse 20s ease-in-out infinite',
				'breathe-slow': 'breathe-slow 12s ease-in-out infinite',
				'rainbow': 'rainbow var(--speed, 2s) infinite linear'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
