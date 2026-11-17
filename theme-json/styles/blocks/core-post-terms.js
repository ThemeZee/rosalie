// Post Terms — small uppercase meta links in the muted neutral that go to the
// ink colour on hover. The `outline` variation turns each term link into a
// sharp-cornered outline pill (transparent box with an ink border that fills on
// hover), matching the Button block's outline motif.
module.exports = {
	color: {
		text: 'var:preset|color|muted',
	},
	elements: {
		link: {
			color: {
				text: 'var:preset|color|muted',
			},
			typography: {
				textDecoration: 'none',
			},
			':hover': {
				color: {
					text: 'var:preset|color|contrast',
				},
			},
		},
	},
	typography: {
		fontSize: 'var:preset|font-size|body-xs',
		fontWeight: '700',
		letterSpacing: '0.12rem',
		textTransform: 'uppercase',
	},
	variations: {
		outline: {
			// `&` is the block container. Hide the comma separator — a plain gap
			// between the bordered pills reads better.
			css: '& .wp-block-post-terms__separator{display:none}',
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
					spacing: {
						margin: {
							right: 'var:preset|spacing|100',
							bottom: 'var:preset|spacing|100',
						},
						padding: {
							top: 'calc(var(--wp--preset--spacing--150) - 1px)',
							bottom: 'calc(var(--wp--preset--spacing--150) - 1px)',
							left: 'calc(var(--wp--preset--spacing--200) - 1px)',
							right: 'calc(var(--wp--preset--spacing--200) - 1px)',
						},
					},
					typography: {
						lineHeight: 'var:custom|line-height|display',
					},
					css: 'display: inline-block; transition: all 0.2s ease-in-out',
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
					':focus-visible': {
						outline: {
							offset: '3px',
							width: '3px',
							style: 'solid',
							color: 'var:preset|color|contrast',
						},
					},
				},
			},
		},
	},
};
