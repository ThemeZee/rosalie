// `textInput` element (WordPress 6.9+): styles <textarea> and the text-entry
// <input> types (email, number, password, search, text, tel, url) in one place —
// in any form, whether or not the Form block renders it. `select` shares the same
// look (see ./select.js). Expressed entirely through structured theme.json keys,
// including the keyboard-focus outline.
//
// Sharp-cornered white field with a 1px ink border (matching the bold, square
// look of the reference), near-black text, comfortable padding, body typography,
// and an ink focus ring for keyboard users.
module.exports = {
	border: {
		color: 'var:preset|color|contrast',
		radius: '0',
		style: 'solid',
		width: '1px',
	},
	color: {
		background: 'var:preset|color|white',
		text: 'var:preset|color|contrast',
	},
	':focus-visible': {
		outline: {
			color: 'var:preset|color|contrast',
			offset: '2px',
			style: 'solid',
			width: '2px',
		},
	},
	spacing: {
		padding: {
			top: 'var:preset|spacing|150',
			bottom: 'var:preset|spacing|150',
			left: 'var:preset|spacing|200',
			right: 'var:preset|spacing|200',
		},
	},
	typography: {
		fontFamily: 'var:custom|font-family|body',
		fontSize: 'var:preset|font-size|body',
		lineHeight: 'var:custom|line-height|body',
	},
};
