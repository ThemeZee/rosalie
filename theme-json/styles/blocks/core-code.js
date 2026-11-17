// Code — a sharp-cornered surface panel with a hairline border, sitting a shade
// off the yellow canvas so the snippet reads as a distinct block. The monospaced
// font stack has no theme.json key, so it is set through `css` on the block root
// (inherited by the inner `<code>`).
module.exports = {
	color: {
		background: 'var:preset|color|surface',
		text: 'var:preset|color|contrast',
	},
	border: {
		color: 'var:custom|color|line',
		radius: '0',
		style: 'solid',
		width: '1px',
	},
	spacing: {
		padding: {
			top: 'var:preset|spacing|200',
			right: 'var:preset|spacing|300',
			bottom: 'var:preset|spacing|200',
			left: 'var:preset|spacing|300',
		},
	},
	typography: {
		fontSize: 'var:preset|font-size|body-sm',
	},
	css:
		'font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,' +
		'"Liberation Mono",monospace;overflow:auto',
};
