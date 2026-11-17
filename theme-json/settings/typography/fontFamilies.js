// Rosalie bundles two open-source variable fonts, both self-hosted from
// `resources/fonts/` (copied to `assets/fonts/` at build time):
//
//   - Archivo  (display) — a heavy grotesk used for every heading, the site
//     title, buttons and big feature statements. Upright, tight tracking.
//   - Figtree  (body)    — a neutral, legible grotesk for running text and UI.
//
// Each family ships a single variable woff2 per style, split into `latin` and
// `latin-ext` subsets (Google/Fontsource convention) via `unicodeRange`, so
// accented European characters render while keeping each file small. The weight
// axis is exposed as a range so any weight in it is available to the editor.
const LATIN =
	'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
const LATIN_EXT =
	'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';

module.exports = [
	{
		name: 'Archivo',
		slug: 'archivo',
		fontFamily: 'Archivo, system-ui, sans-serif',
		fontFace: [
			{
				src: [ 'file:./assets/fonts/Archivo-Variable-latin.woff2' ],
				fontWeight: '100 900',
				fontStyle: 'normal',
				fontStretch: 'normal',
				fontDisplay: 'swap',
				fontFamily: 'Archivo',
				unicodeRange: LATIN,
			},
			{
				src: [ 'file:./assets/fonts/Archivo-Variable-latin-ext.woff2' ],
				fontWeight: '100 900',
				fontStyle: 'normal',
				fontStretch: 'normal',
				fontDisplay: 'swap',
				fontFamily: 'Archivo',
				unicodeRange: LATIN_EXT,
			},
			{
				src: [ 'file:./assets/fonts/Archivo-Italic-Variable-latin.woff2' ],
				fontWeight: '100 900',
				fontStyle: 'italic',
				fontStretch: 'normal',
				fontDisplay: 'swap',
				fontFamily: 'Archivo',
				unicodeRange: LATIN,
			},
			{
				src: [
					'file:./assets/fonts/Archivo-Italic-Variable-latin-ext.woff2',
				],
				fontWeight: '100 900',
				fontStyle: 'italic',
				fontStretch: 'normal',
				fontDisplay: 'swap',
				fontFamily: 'Archivo',
				unicodeRange: LATIN_EXT,
			},
		],
	},
	{
		name: 'Figtree',
		slug: 'figtree',
		fontFamily: 'Figtree, system-ui, sans-serif',
		fontFace: [
			{
				src: [ 'file:./assets/fonts/Figtree-Variable-latin.woff2' ],
				fontWeight: '300 900',
				fontStyle: 'normal',
				fontDisplay: 'swap',
				fontFamily: 'Figtree',
				unicodeRange: LATIN,
			},
			{
				src: [ 'file:./assets/fonts/Figtree-Variable-latin-ext.woff2' ],
				fontWeight: '300 900',
				fontStyle: 'normal',
				fontDisplay: 'swap',
				fontFamily: 'Figtree',
				unicodeRange: LATIN_EXT,
			},
			{
				src: [ 'file:./assets/fonts/Figtree-Italic-Variable-latin.woff2' ],
				fontWeight: '300 900',
				fontStyle: 'italic',
				fontDisplay: 'swap',
				fontFamily: 'Figtree',
				unicodeRange: LATIN,
			},
			{
				src: [
					'file:./assets/fonts/Figtree-Italic-Variable-latin-ext.woff2',
				],
				fontWeight: '300 900',
				fontStyle: 'italic',
				fontDisplay: 'swap',
				fontFamily: 'Figtree',
				unicodeRange: LATIN_EXT,
			},
		],
	},
];
