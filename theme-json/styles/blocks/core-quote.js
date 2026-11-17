// Quote — framed by a thick ink rule on the left with a left indent (the
// reference's review-quote voice), the body kept upright at body-lg. The
// citation becomes the small uppercase eyebrow (muted, Figtree). `<cite>` is an
// inline node, so it is styled through `css`.
//
// The base applies to every quote; the core-registered `plain` block style
// softens the accent rule to a hairline.
module.exports = {
	color: {
		text: 'var:preset|color|contrast',
	},
	border: {
		left: {
			color: 'var:preset|color|contrast',
			style: 'solid',
			width: '3px',
		},
	},
	spacing: {
		padding: {
			left: 'var:preset|spacing|400',
		},
	},
	typography: {
		fontSize: 'var:preset|font-size|body-lg',
		fontStyle: 'normal',
	},
	css:
		'& cite{display:block;margin-top:var(--wp--preset--spacing--200);' +
		'font-family:var(--wp--preset--font-family--figtree);' +
		'font-size:var(--wp--preset--font-size--body-xs);font-style:normal;' +
		'font-weight:700;letter-spacing:0.12rem;text-transform:uppercase;' +
		'color:var(--wp--preset--color--muted)}',
	variations: {
		// Plain — softens the accent rule to a hairline.
		plain: {
			border: {
				left: {
					color: 'var:custom|color|line-strong',
					style: 'solid',
					width: '1px',
				},
			},
		},
	},
};
