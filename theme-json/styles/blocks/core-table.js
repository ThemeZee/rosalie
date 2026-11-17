// Table — styled as a clean price/spec list in the reference's manner: no outer
// frame, a small uppercase header row underlined by a solid ink rule, hairline
// rules between the body rows, generous padding and the body font. The last
// column (prices) is emphasised in bold. Cells and header are sub-nodes with no
// theme.json keys of their own, so they go through `css`. The caption is styled
// globally via `styles.elements.caption`.
//
// The base styles every table; the `stripes` variation adds a surface fill to
// alternating rows and drops the per-row rules.
//
// Header cells are left-aligned explicitly on `& thead th`: the `& th,& td`
// shorthand sets `text-align:left`, but WordPress drops the `th` half of that
// comma selector when it compiles the `css` hatch, so the header would otherwise
// fall back to the browser default (centre).
//
// The stripe row fill is NOT set here — core ships a grey default at 0-3-2 that
// this 0-1-0 `css` hatch loses to, so the stripe colour lives in
// `resources/scss/global/_block-styles.scss` at matched specificity.
module.exports = {
	color: {
		text: 'var:preset|color|contrast',
	},
	typography: {
		fontSize: 'var:preset|font-size|body',
	},
	css:
		'& table{width:100%;border-collapse:collapse}' +
		'& th,& td{border-bottom:1px solid var(--wp--custom--color--line);' +
		'padding:var(--wp--preset--spacing--200) var(--wp--preset--spacing--300);' +
		'text-align:left;vertical-align:top}' +
		'& thead th{border-bottom:1px solid var(--wp--preset--color--contrast);' +
		'font-family:var(--wp--preset--font-family--figtree);' +
		'font-size:var(--wp--preset--font-size--body-xs);font-weight:700;' +
		'letter-spacing:0.08rem;text-transform:uppercase;' +
		'color:var(--wp--preset--color--muted);text-align:left}' +
		'& tbody td:last-child{font-weight:700}' +
		'& tfoot td{font-weight:700}',
	variations: {
		stripes: {
			css:
				'& th,& td{border-color:transparent}' +
				'& thead th{border-bottom:1px solid var(--wp--preset--color--contrast)}',
		},
	},
};
