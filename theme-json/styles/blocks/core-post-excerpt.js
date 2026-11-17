// Post Excerpt — the "read more" link is styled as a small, sharp-cornered
// outline pill (the secondary uppercase motif), transparent at rest with an ink
// border that fills on hover/active.
module.exports = {
	elements: {
		link: {
			border: {
				color: 'var:preset|color|contrast',
				radius: '0',
				style: 'solid',
				width: '1px',
			},
			color: {
				background: 'transparent',
				text: 'var:preset|color|contrast',
			},
			css: 'transition: all 0.2s ease-in-out',
			spacing: {
				padding: {
					top: 'calc(var(--wp--preset--spacing--200) - 1px)',
					bottom: 'calc(var(--wp--preset--spacing--200) - 1px)',
					left: 'calc(var(--wp--preset--spacing--300) - 1px)',
					right: 'calc(var(--wp--preset--spacing--300) - 1px)',
				},
			},
			typography: {
				fontSize: 'var:preset|font-size|body-xs',
				fontWeight: '700',
				letterSpacing: '0.12rem',
				lineHeight: 'var:custom|line-height|display',
				textDecoration: 'none',
				textTransform: 'uppercase',
			},
			':focus-visible': {
				outline: {
					offset: '3px',
					width: '3px',
					style: 'solid',
					color: 'var:preset|color|contrast',
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
				border: {
					color: 'var:preset|color|contrast',
				},
				color: {
					background: 'var:preset|color|contrast',
					text: 'var:preset|color|white',
				},
			},
		},
	},
};
