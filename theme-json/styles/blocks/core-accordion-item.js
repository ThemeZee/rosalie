// Accordion Item — each item is an open row separated by a hairline rule, not a
// filled card (matching the reference's FAQ). No background, no rounding; a
// single bottom border divides the rows, with even vertical padding and no
// horizontal inset so the toggle and panel align with the surrounding content.
module.exports = {
	border: {
		bottom: {
			color: 'var:custom|color|line-strong',
			style: 'solid',
			width: '1px',
		},
	},
	spacing: {
		padding: {
			top: 'var:preset|spacing|300',
			right: '0',
			bottom: 'var:preset|spacing|300',
			left: '0',
		},
	},
};
