// Preformatted — the same sharp-cornered surface panel as the Code block, but
// keeping the body font (it preserves whitespace in ordinary text, not code).
// `overflow:auto` (no theme.json key) guards against long lines.
module.exports = {
	color: {
		background: 'var:preset|color|surface',
		text: 'var:preset|color|contrast',
	},
	border: {
		color: 'var:custom|color|line',
		radius: '0',
		style: 'solid',
		width: '1px',
	},
	spacing: {
		padding: {
			top: 'var:preset|spacing|200',
			right: 'var:preset|spacing|300',
			bottom: 'var:preset|spacing|200',
			left: 'var:preset|spacing|300',
		},
	},
	typography: {
		fontSize: 'var:preset|font-size|body-sm',
	},
	css: 'overflow:auto',
};
