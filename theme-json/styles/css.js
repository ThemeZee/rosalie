// Top-level custom CSS, emitted raw into the global styles stylesheet (no
// wrapper/prefix), so these selectors apply site-wide. Reserved for the few
// things theme.json has no structured key for. All of the form-field styling
// (fill, border, padding, typography, focus outline) lives in the structured
// `textInput`/`select` elements — theme-json/styles/elements/.

// Linked headings keep the heading's own ink colour rather than the global link
// colour, go muted on hover, and are never underlined — so a heading that
// happens to be a link reads as a heading, matching the post-title treatment.
// `a:not(.wp-element-button)` is specific enough to override the global link
// element (which uses :where(), so it carries no specificity) without !important.
const linkedHeadings =
	':where(h1, h2, h3, h4, h5, h6) a:not(.wp-element-button){color:var(--wp--preset--color--contrast);text-decoration:none}' +
	':where(h1, h2, h3, h4, h5, h6) a:not(.wp-element-button):hover{color:var(--wp--preset--color--muted);text-decoration:none}';

// Submit/reset/button inputs aren't covered by theme.json: the `button` element
// targets the `.wp-element-button` class, not a raw `input[type=submit]` tag
// (class-wp-theme-json-gutenberg.php maps 'button' => '.wp-element-button,
// .wp-block-button__link'). So mirror the Core Button element here — the same
// solid-ink, sharp-cornered button defined in theme-json/styles/elements/button.js,
// inverting to an outlined button on hover/active. Anything already tagged
// `.wp-element-button` keeps Core's canonical button styling.
const submitButtons =
	'input[type=submit]:not(.wp-element-button),' +
	'input[type=reset]:not(.wp-element-button),' +
	'input[type=button]:not(.wp-element-button)' +
	'{' +
	'background-color:var(--wp--preset--color--contrast);' +
	'color:var(--wp--preset--color--white);' +
	'border:1px solid var(--wp--preset--color--contrast);' +
	'border-radius:0;' +
	'padding:calc(var(--wp--preset--spacing--200) - 1px) calc(var(--wp--preset--spacing--400) - 1px);' +
	'font-family:var(--wp--preset--font-family--archivo);' +
	'font-size:var(--wp--preset--font-size--body-md);' +
	'font-weight:700;' +
	'line-height:var(--wp--custom--line-height--display);' +
	'cursor:pointer;' +
	'transition:all 0.2s ease-in-out;' +
	'}' +
	'input[type=submit]:not(.wp-element-button):hover,' +
	'input[type=reset]:not(.wp-element-button):hover,' +
	'input[type=button]:not(.wp-element-button):hover,' +
	'input[type=submit]:not(.wp-element-button):active,' +
	'input[type=reset]:not(.wp-element-button):active,' +
	'input[type=button]:not(.wp-element-button):active' +
	'{' +
	'background-color:transparent;' +
	'color:var(--wp--preset--color--contrast);' +
	'border-color:var(--wp--preset--color--contrast);' +
	'}' +
	'input[type=submit]:not(.wp-element-button):focus-visible,' +
	'input[type=reset]:not(.wp-element-button):focus-visible,' +
	'input[type=button]:not(.wp-element-button):focus-visible' +
	'{' +
	'outline:3px solid var(--wp--preset--color--contrast);' +
	'outline-offset:3px;' +
	'}';

module.exports = linkedHeadings + submitButtons;
