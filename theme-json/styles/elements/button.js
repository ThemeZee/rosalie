// Button element — the primary call to action. A solid near-black, sharp-
// cornered button with a heavy Archivo label at a comfortable reading size
// (sentence case, not an uppercase pill — the small uppercase treatment is
// reserved for secondary links: pagination, tags, terms). On hover/active it
// inverts to an outlined button: the fill drops to transparent (revealing the
// yellow canvas) while the ink border and label stay, so it reads as an
// outline everywhere. On the dark sections, templates recolour the button to
// the brass yellow via the block's own colour controls.
module.exports = {
	border: {
		color: 'var:preset|color|contrast',
		radius: '0',
		style: 'solid',
		width: '1px',
	},
	color: {
		background: 'var:preset|color|contrast',
		text: 'var:preset|color|white',
	},
	css: 'transition: all 0.2s ease-in-out',
	spacing: {
		padding: {
			top: 'calc(var(--wp--preset--spacing--200) - 1px)',
			bottom: 'calc(var(--wp--preset--spacing--200) - 1px)',
			left: 'calc(var(--wp--preset--spacing--400) - 1px)',
			right: 'calc(var(--wp--preset--spacing--400) - 1px)',
		},
	},
	typography: {
		fontFamily: 'var:custom|font-family|display',
		fontSize: 'var:preset|font-size|body-md',
		fontWeight: '700',
		lineHeight: 'var:custom|line-height|display',
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
			background: 'transparent',
			text: 'var:preset|color|contrast',
		},
	},
	':active': {
		border: {
			color: 'var:preset|color|contrast',
		},
		color: {
			background: 'transparent',
			text: 'var:preset|color|contrast',
		},
	},
};
