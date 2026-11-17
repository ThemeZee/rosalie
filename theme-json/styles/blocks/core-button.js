// Button · Outline style — the inverse of the default solid button: Core's
// "outline" style gives it a transparent fill with a currentColor border, and
// this fragment pins the border to 1px, tightens the padding to match, and
// fills it with ink (white label) on hover/active.
module.exports = {
	variations: {
		outline: {
			border: {
				width: '1px',
			},
			spacing: {
				padding: {
					top: 'calc(var(--wp--preset--spacing--200) - 1px)',
					bottom: 'calc(var(--wp--preset--spacing--200) - 1px)',
					left: 'calc(var(--wp--preset--spacing--400) - 1px)',
					right: 'calc(var(--wp--preset--spacing--400) - 1px)',
				},
			},
			':hover': {
				border: {
					color: 'var:preset|color|contrast',
				},
				color: {
					background: 'var:preset|color|contrast',
					text: 'var:preset|color|white',
				},
			},
			':active': {
				color: {
					background: 'var:preset|color|contrast',
					text: 'var:preset|color|white',
				},
			},
		},
	},
};
