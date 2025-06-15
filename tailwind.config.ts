
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
				'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
			},
			colors: {
				'neon-green': '#39ff14',
				'neon-blue': '#00fff7',
				'neon-purple': '#ad00ff',
				'dark-bg': '#101820',
				'card-dark': '#171f2d',
				'main-bg': '#112031',
				'accent-blue': '#22d3ee',
				'accent-green': '#23fd9b',
				'main-deep': '#0e3547',
				'glass': 'rgba(23,31,45, 0.80)',
			},
			textShadow: {
				'neon': '0 0 8px #39ff14, 0 0 16px #39ff14',
				'neon-blue': '0 0 8px #00fff7, 0 0 16px #00fff7',
			},
			boxShadow: {
				'glow-green': "0 0 12px 2px #39ff14, 0 0 44px 9px #23fd9bcc",
				'glow-blue': "0 0 8px 2px #00fff7, 0 0 32px 4px #00fff744",
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
				'main-gradient': "linear-gradient(120deg, #112031 0%, #283972 55%, #0e3547 100%)",
			},
			backgroundSize: {
				'grid': '40px 40px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
