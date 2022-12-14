const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope', ...defaultTheme.fontFamily.sans],
				serif: ['Fraunces', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
};
