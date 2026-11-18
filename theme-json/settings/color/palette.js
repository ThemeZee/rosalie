// Rosalie's curated colour palette — a soft, high-contrast system built on a
// pale-pink canvas, near-black ink and a couple of neutrals. Deliberately
// small so the editor colour picker stays on-brand; `defaultPalette` is off
// (see ../color.js) so only these show.
//
//   base      pale pink    — the page canvas and the highlight on dark sections
//   contrast  near-black   — body text, buttons, dark sections, rules
//   white     pure white   — text/fills on the dark sections
//   surface   soft off-white — light panels, inputs, code blocks
//   muted     dark neutral — secondary text / eyebrows on the light canvas (AA)
//   subtle    light neutral — secondary text on the dark sections (AA)
//
// Hairline rules (translucent ink / white) are not swatches — see
// ../custom/color.js.
module.exports = [
	{
		color: '#f8d4f0',
		name: 'Base',
		slug: 'base',
	},
	{
		color: '#080400',
		name: 'Contrast',
		slug: 'contrast',
	},
	{
		color: '#ffffff',
		name: 'White',
		slug: 'white',
	},
	{
		color: '#f8f4f0',
		name: 'Surface',
		slug: 'surface',
	},
	{
		color: '#484430',
		name: 'Muted',
		slug: 'muted',
	},
	{
		color: '#989490',
		name: 'Subtle',
		slug: 'subtle',
	},
];
