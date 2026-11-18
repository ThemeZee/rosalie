// Pullquote — a big, upright display statement in the heavy Archivo grotesk,
// set off by a solid ink rule above and below rather than sitting in a panel, so
// it reads as a loud feature line (the reference's founder-statement voice). The
// citation is a small, muted, uppercase Figtree eyebrow; `<cite>` is an inline
// node with no block/element key, so it is set through `css`.
module.exports = {
	color: {
		text: 'var:preset|color|contrast',
	},
	border: {
		top: {
			color: 'var:preset|color|contrast',
			style: 'solid',
			width: '2px',
		},
		bottom: {
			color: 'var:preset|color|contrast',
			style: 'solid',
			width: '2px',
		},
	},
	spacing: {
		padding: {
			top: 'var:preset|spacing|500',
			bottom: 'var:preset|spacing|500',
		},
	},
	typography: {
		fontFamily: 'var:custom|font-family|display',
		fontSize: 'var:preset|font-size|display-sm',
		fontStyle: 'normal',
		fontWeight: '800',
		letterSpacing: '-0.02em',
		lineHeight: 'var:custom|line-height|display',
	},
	css:
		'& cite{display:block;margin-top:var(--wp--preset--spacing--300);' +
		'font-family:var(--wp--preset--font-family--figtree);' +
		'font-size:var(--wp--preset--font-size--body-xs);font-style:normal;' +
		'font-weight:700;letter-spacing:0.12rem;text-transform:uppercase;' +
		'color:var(--wp--preset--color--muted)}',
};
