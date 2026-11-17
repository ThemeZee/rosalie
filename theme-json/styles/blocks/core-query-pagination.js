// Pagination — Previous / numbers / Next styled as sharp-cornered outline
// pills. A single `elements.link` entry styles all three link types; the
// current-page marker (a non-link <span>) is handled in
// core-query-pagination-numbers.js.
module.exports = {
	spacing: {
		blockGap: 'var:preset|spacing|200',
	},
	typography: {
		fontSize: 'var:preset|font-size|body-xs',
		fontWeight: '700',
		letterSpacing: '0.12rem',
		lineHeight: 'var:custom|line-height|display',
		textTransform: 'uppercase',
	},
	elements: {
		link: {
			color: {
				background: 'transparent',
				text: 'var:preset|color|contrast',
			},
			typography: {
				textDecoration: 'none',
			},
			border: {
				color: 'var:preset|color|contrast',
				radius: '0',
				style: 'solid',
				width: '1px',
			},
			spacing: {
				padding: {
					top: 'calc(var(--wp--preset--spacing--200) - 1px)',
					bottom: 'calc(var(--wp--preset--spacing--200) - 1px)',
					left: 'calc(var(--wp--preset--spacing--300) - 1px)',
					right: 'calc(var(--wp--preset--spacing--300) - 1px)',
				},
			},
			':hover': {
				color: {
					background: 'var:preset|color|contrast',
					text: 'var:preset|color|white',
				},
			},
			':focus': {
				color: {
					background: 'var:preset|color|contrast',
					text: 'var:preset|color|white',
				},
			},
		},
	},
};
