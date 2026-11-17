// Post Navigation Link (Previous / Next on single posts) — reads the same as
// the Tags links in the post footer: plain uppercase meta links in the muted
// neutral that go to the ink colour on hover, no underline. Kept in lock-step
// with core-post-terms.js.
module.exports = {
	color: {
		// The direction arrow <span> (a sibling of the link) inherits this.
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
};
