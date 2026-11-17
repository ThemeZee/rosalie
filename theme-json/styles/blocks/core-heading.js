module.exports = {
	variations: {
		// Overline — small, uppercase, letter-spaced eyebrow label, matching the
		// Paragraph Overline (see core-paragraph.js). A heading otherwise inherits
		// the heavy display font, weight 800 and tight line-height from
		// `styles.elements.heading`, so this resets those back to the body values.
		overline: {
			color: {
				text: 'var:preset|color|muted',
			},
			typography: {
				fontFamily: 'var:custom|font-family|body',
				fontSize: 'var:preset|font-size|body-xs',
				fontStyle: 'normal',
				fontWeight: '700',
				letterSpacing: '0.12rem',
				lineHeight: 'var:custom|line-height|body',
				textTransform: 'uppercase',
			},
		},
	},
};
