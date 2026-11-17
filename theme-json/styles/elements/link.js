// Link element — on the light canvas, links are the ink colour and underlined,
// dropping the underline on hover. On the dark sections, templates set the
// group's own `elements.link` (subtle → white) so links stay legible there.
module.exports = {
	color: {
		text: 'var:preset|color|contrast',
	},
	typography: {
		textDecoration: 'underline',
	},
	':visited': {
		color: {
			text: 'var:preset|color|contrast',
		},
	},
	':hover': {
		color: {
			text: 'var:preset|color|muted',
		},
		typography: {
			textDecoration: 'none',
		},
	},
};
