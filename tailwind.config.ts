
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
			},
			textShadow: {
				'neon': '0 0 8px #39ff14, 0 0 16px #39ff14',
				'neon-blue': '0 0 8px #00fff7, 0 0 16px #00fff7',
			},
			boxShadow: {
				'glow-green': "0 0 8px 2px #39ff14, 0 0 32px 4px #39ff1444",
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
				'grid': "linear-gradient(90deg, rgba(80,255,220,0.03) 1px, transparent 1px), linear-gradient(180deg, rgba(80,255,220,0.03) 1px, transparent 1px)",
			},
			backgroundSize: {
				'grid': '40px 40px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
