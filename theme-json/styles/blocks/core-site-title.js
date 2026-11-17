// Site Title — the wordmark: heavy upright Archivo at a compact display size,
// near-black ink linking to muted on hover.
module.exports = {
	elements: {
		link: {
			color: {
				text: 'var:preset|color|contrast',
			},
			':hover': {
				color: {
					text: 'var:preset|color|muted',
				},
			},
		},
	},
	typography: {
		fontFamily: 'var:custom|font-family|display',
		fontSize: 'var:preset|font-size|body-xl',
		fontStyle: 'normal',
		fontWeight: '800',
		letterSpacing: '-0.02em',
		lineHeight: 'var:custom|line-height|display',
	},
};
