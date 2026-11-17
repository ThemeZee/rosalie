// Tab List — the row of tab buttons. The active tab (`[aria-selected="true"]`)
// reads like the default Button (filled ink, white label); the inactive tabs
// read like the outline pill (transparent box with an ink border that fills on
// hover / keyboard focus). Compact box at the small uppercase meta size.
//
// All of this lives in `css` because the design needs per-state selectors a
// design key can't reach: the active tab, the non-link `<button>` elements, and
// core's active-tab underline. The tab buttons' default CSS is `:where(…)`
// (0-0-0), so these 0-1-0 rules win without `!important`; only core's active
// underline (0-1-1) needs it.
const CSS =
	'& button{' +
	'border:1px solid var(--wp--preset--color--contrast);' +
	'border-radius:0;' +
	'padding:calc(var(--wp--preset--spacing--150) - 1px) ' +
	'calc(var(--wp--preset--spacing--200) - 1px);' +
	'background-color:transparent;' +
	'color:var(--wp--preset--color--contrast);' +
	'font-size:var(--wp--preset--font-size--body-xs);' +
	'font-weight:700;' +
	'letter-spacing:0.12rem;' +
	'line-height:var(--wp--custom--line-height--display);' +
	'text-transform:uppercase;' +
	'transition:all 0.2s ease-in-out' +
	'}' +
	'& button:hover{' +
	'background-color:var(--wp--preset--color--contrast);' +
	'color:var(--wp--preset--color--white)' +
	'}' +
	'& button:focus-visible{' +
	'background-color:var(--wp--preset--color--contrast);' +
	'color:var(--wp--preset--color--white)' +
	'}' +
	'& button[aria-selected="true"]{' +
	'background-color:var(--wp--preset--color--contrast);' +
	'color:var(--wp--preset--color--white)' +
	'}' +
	'& button[aria-selected="true"]::before{display:none !important}';

module.exports = {
	spacing: {
		blockGap: 'var:preset|spacing|100',
	},
	css: CSS,
};
