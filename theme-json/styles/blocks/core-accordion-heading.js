// Accordion Heading — the question label of a FAQ row: a bold, sentence-case
// Archivo heading at a comfortable size (not the small uppercase eyebrow), the
// near-black ink colour by default shifting to muted on hover/focus, never
// underlined.
//
// The heading renders as an `<h3>`, so it inherits the display font, weight 800
// and tight line-height from `styles.elements.heading`; the typography here
// relaxes the weight to 700 and sets the row size. The toggle `<button>` and its
// title `<span>` both inherit these values (the button declares `font: inherit`),
// so styling the block root reaches the visible label.
//
// Everything a design key can't express lives in `css`:
//   - the hover / keyboard-focus colour shift (a plain block can't take a
//     `:hover` design key). Both the base colour (a design key, emitted first)
//     and these `css` rules sit at 0-1-0, so the later `css` wins without
//     `!important`;
//   - suppressing core's hover underline on the title (core sets it at 0-4-0, so
//     `!important`);
//   - zeroing the toggle's own `1em 0` vertical padding so the Accordion Item's
//     padding is the sole, symmetric inset.
module.exports = {
	color: {
		text: 'var:preset|color|contrast',
	},
	typography: {
		fontFamily: 'var:custom|font-family|display',
		fontSize: 'var:preset|font-size|body-lg',
		fontStyle: 'normal',
		fontWeight: '700',
		letterSpacing: '-0.01em',
		lineHeight: 'var:custom|line-height|display',
		textTransform: 'none',
	},
	css:
		'& .wp-block-accordion-heading__toggle:hover{' +
		'color:var(--wp--preset--color--muted)' +
		'}' +
		'& .wp-block-accordion-heading__toggle:focus-visible{' +
		'color:var(--wp--preset--color--muted)' +
		'}' +
		'& .wp-block-accordion-heading__toggle:hover ' +
		'.wp-block-accordion-heading__toggle-title{text-decoration:none !important}' +
		'& .wp-block-accordion-heading__toggle{padding-top:0;padding-bottom:0}',
};
