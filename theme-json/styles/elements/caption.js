// Caption — the shared treatment for every block caption (Image, Gallery, Table,
// Audio, Video, Embed …). WordPress tags each caption with `wp-element-caption`,
// so this single element entry styles them all at once: a small body-xs size
// and the muted neutral, which sits back from the near-black body text while
// still clearing WCAG AA for small text on the yellow base and on white.
module.exports = {
	color: {
		text: 'var:preset|color|muted',
	},
	typography: {
		fontSize: 'var:preset|font-size|body-xs',
	},
};
