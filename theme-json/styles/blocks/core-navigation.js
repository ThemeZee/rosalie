// Default styling for the Navigation block. A single `elements.link` entry
// styles every navigation link (top-level items and submenu items) in one
// place: no underline by default, underlined on hover.
//
// The "Main Navigation" block style (registered in src/Setup/BlockStyle.php)
// gives the header navigation its look: sentence-case, semibold top-level links
// at the body size (not an uppercase pill — that treatment is reserved for the
// secondary meta links), with a current-item underline and a muted hover shift.
// Everything that distinguishes it needs the variation's `css` property, because
// no design key can express it:
//   - semibold applies to TOP-LEVEL links only — a design key cannot target
//     direct children versus links nested inside a dropdown;
//   - the hover colour must beat core's `color:inherit` pin (see below);
//   - the dropdown panel is the `…__submenu-container` wrapper, which is neither
//     a block nor a theme.json element, so its border / fill / square corners
//     can only be reached by selector.
// The base link colour stays the near-black nav default via inheritance.

// Top-level items reach the container by one of two chains, so every top-level
// rule has to be emitted for both:
//   - a hand-built menu item (`core/navigation-link`) is an `<li>` placed
//     DIRECTLY inside `.wp-block-navigation__container`;
//   - the Page List block (`core/page-list`) wraps its items in an extra
//     `<ul class="wp-block-page-list">`, so each item `<li>` sits one level
//     deeper — a grandchild of the container.
// Both chains keep the `>` combinator so the rule stays on top-level items only
// (submenu items live in `__submenu-container`, matched separately below). The
// `css` escape hatch drops all but the last of a comma-separated selector, so
// the two chains can't be comma-combined in one rule — this helper emits one
// rule block per chain instead, with the same trailing selector and body.
const topLevel = ( trailing, declarations ) =>
	'& .wp-block-navigation__container > ' +
	trailing +
	'{' +
	declarations +
	'}' +
	'& .wp-block-navigation__container > .wp-block-page-list > ' +
	trailing +
	'{' +
	declarations +
	'}';

const MAIN_NAVIGATION_CSS =
	// Top-level links only: semibold at the inherited body size, plus a reserved
	// 1px transparent bottom border so the current-item underline below adds no
	// height and nothing shifts when it shows. Matched by `.wp-block-navigation-
	// item` class (present on both the front-end `<li>` and the editor `<div>`).
	topLevel(
		'.wp-block-navigation-item > .wp-block-navigation-item__content',
		'font-weight:600;border-bottom:1px solid transparent'
	) +
	// Current menu item: reveal that reserved border in the link's own colour.
	topLevel(
		'.current-menu-item > .wp-block-navigation-item__content',
		'border-bottom-color:currentColor'
	) +
	// Hover / keyboard-focus colour for every nav link. Set on the link itself,
	// which needs `!important`: core pins links to `color:inherit` at 0-3-0, past
	// this `:root :where(…)` (0-1-0) rule.
	'& .wp-block-navigation-item__content:hover{' +
	'color:var(--wp--preset--color--muted) !important' +
	'}' +
	'& .wp-block-navigation-item__content:focus{' +
	'color:var(--wp--preset--color--muted) !important' +
	'}' +
	// Slightly smaller dropdown chevron on top-level toggles, nudged to sit
	// against the label. Core sets 0.6em at 0-2-0, so the size needs `!important`.
	topLevel(
		'.wp-block-navigation-item > .wp-block-navigation__submenu-icon',
		'width:0.7em !important;height:0.7em !important;' +
			'position:relative;top:-1px'
	) +
	// Dropdown panel: drop core's border/white fill/rounding for a square surface
	// panel with a hairline border, dropped a small gap below the item. Core
	// styles these at 0-3-0 / 0-1-1, past this 0-1-0 rule, so they need
	// `!important`; `border-radius` is a UA default (0-0-0) and wins without.
	'& .wp-block-navigation__submenu-container{' +
	'border:1px solid var(--wp--custom--color--line) !important;' +
	'background-color:var(--wp--preset--color--surface) !important;' +
	'border-radius:0;' +
	'padding-top:var(--wp--preset--spacing--100);' +
	'padding-bottom:var(--wp--preset--spacing--100);' +
	'margin-top:var(--wp--preset--spacing--150) !important' +
	'}' +
	// Keep hover alive across that gap with a transparent `::before` filler.
	'& .wp-block-navigation__submenu-container::before{' +
	'content:"";position:absolute;left:0;right:0;' +
	'top:calc(0px - var(--wp--preset--spacing--150));' +
	'height:var(--wp--preset--spacing--150)' +
	'}' +
	// Dropdown links: a touch smaller and semibold. The roomier left/right
	// padding is core-pinned at 0-4-0, so those two need `!important`.
	'& .wp-block-navigation__submenu-container .wp-block-navigation-item__content{' +
	'font-size:var(--wp--preset--font-size--body-sm);' +
	'font-weight:600;' +
	'padding-left:var(--wp--preset--spacing--300) !important;' +
	'padding-right:var(--wp--preset--spacing--300) !important' +
	'}' +
	// Mobile overlay: the brass canvas instead of core's white (0-5-0, so
	// `!important`), keeping the near-black links legible.
	'& .wp-block-navigation__responsive-container.is-menu-open{' +
	'background-color:var(--wp--preset--color--base) !important' +
	'}';

module.exports = {
	elements: {
		link: {
			typography: {
				textDecoration: 'none',
			},
			':hover': {
				typography: {
					textDecoration: 'underline',
				},
			},
		},
	},
	variations: {
		'main-navigation': {
			spacing: {
				// Roomier gap between top-level items than the default nav.
				blockGap: 'var:preset|spacing|300',
			},
			elements: {
				link: {
					// No underline — the hover colour shift (in the `css` above)
					// is the only hover affordance here.
					typography: {
						textDecoration: 'none',
					},
					':hover': {
						typography: {
							textDecoration: 'none',
						},
					},
				},
			},
			css: MAIN_NAVIGATION_CSS,
		},
	},
};
