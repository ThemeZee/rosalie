// Rosalie's curated colour palette — a bold, high-contrast system built on a
// brass-yellow canvas, near-black ink and a couple of neutrals. Deliberately
// small so the editor colour picker stays on-brand; `defaultPalette` is off
// (see ../color.js) so only these show.
//
//   base      brass yellow — the page canvas and the highlight on dark sections
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
		color: '#ffd21f',
		name: 'Base',
		slug: 'base',
	},
	{
		color: '#0d0d0d',
		name: 'Contrast',
		slug: 'contrast',
	},
	{
		color: '#ffffff',
		name: 'White',
		slug: 'white',
	},
	{
		color: '#f5f4ef',
		name: 'Surface',
		slug: 'surface',
	},
	{
		color: '#44443e',
		name: 'Muted',
		slug: 'muted',
	},
	{
		color: '#9a9992',
		name: 'Subtle',
		slug: 'subtle',
	},
];
