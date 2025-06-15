import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
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
				'orbitron': ['Orbitron', 'Arial Rounded MT Bold', 'Arial', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
			},
			colors: {
				'neon-green': '#39ff14',
				'neon-blue': '#00fff7',
				'neon-purple': '#ad00ff',
				'dark-bg': '#141814',
				'card-dark': '#181d19',
				'main-bg': '#0f2016',
				'accent-blue': '#22d3ee',
				'accent-green': '#38ff9b',
				'accent-green-glow': '#48ff00',
				'main-deep': '#0e3547',
				'glass': 'rgba(23,31,45, 0.80)',
			},
			textShadow: {
				'neon': '0 0 8px #39ff14, 0 0 16px #39ff14',
				'neon-blue': '0 0 8px #00fff7, 0 0 16px #00fff7',
			},
			boxShadow: {
				'glow-green': "0 2px 24px 2px #39ff14bb, 0 0 44px 9px #23fd9bcc",
				'glow-blue': "0 0 8px 2px #00fff7, 0 0 32px 4px #00fff744",
				'green-outline': "0 0 0 3px #39ff1477",
			},
			animation: {
				'glow': 'glowPulse 1.2s infinite alternate',
			},
			keyframes: {
				glowPulse: {
					'0%':   { filter: 'drop-shadow(0 0 8px #39ff14)' },
					'100%': { filter: 'drop-shadow(0 0 32px #39ff14aa)' },
				},
			},
			backgroundImage: {
				'main-gradient': "radial-gradient(circle at 60% 20%, #132a1b 0%, #1b2c28 52%, #191f17 100%)",
			},
			backgroundSize: {
				'grid': '44px 44px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
