// Tag Cloud.
//
// DEFAULT style: the tag links read like the Post Terms links — plain uppercase
// muted links going to the ink colour on hover, no underline. The Tag Cloud
// assigns each tag a per-tag inline font-size, which only `!important` can
// override, so one `css` rule forces every link to the uniform body-xs size.
//
// OUTLINE style (`variations.outline`): restyles the block's built-in "Outline"
// style to the Button block's sharp outline pill, filled on hover/focus. Core's
// Outline CSS forces `font-size: unset !important` on each link, so the links
// take their size from the variation's root typography.
module.exports = {
	color: {
		text: 'var:preset|color|muted',
	},
	typography: {
		fontSize: 'var:preset|font-size|body-xs',
		fontWeight: '700',
		letterSpacing: '0.12rem',
		textTransform: 'uppercase',
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
	css: '& a{font-size:var(--wp--preset--font-size--body-xs) !important}',
	variations: {
		outline: {
			css: '&{display:flex;flex-wrap:wrap;align-items:center;gap:var(--wp--preset--spacing--200)}',
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
							top: 'calc(var(--wp--preset--spacing--150) - 1px)',
							bottom: 'calc(var(--wp--preset--spacing--150) - 1px)',
							left: 'calc(var(--wp--preset--spacing--200) - 1px)',
							right: 'calc(var(--wp--preset--spacing--200) - 1px)',
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
		},
	},
};
