// Non-swatch colour tokens — hairline rules used for dividers, table cell
// borders and card edges. They are translucent ink (so they read on the yellow
// base and on white alike) and translucent white (for the dark sections), which
// a flat palette swatch can't express, so they live under `settings.custom`
// instead of the editor colour palette. Referenced as `var:custom|color|line`
// in design keys and `var(--wp--custom--color--line)` inside `css`.
module.exports = {
	line: 'rgba(13, 13, 13, 0.16)',
	'line-strong': 'rgba(13, 13, 13, 0.85)',
	'line-inverse': 'rgba(255, 255, 255, 0.18)',
};
