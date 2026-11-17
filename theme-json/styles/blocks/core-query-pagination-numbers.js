// The page numbers render as a bare run of inline <a>/<span> with no layout
// container, and the current page is a non-link <span class="page-numbers
// current">. Neither is reachable through structured keys, so the little that is
// left lives here as CSS: lay the numbers out in a row (also making the links
// flex items so their structured padding renders as boxes), and give the
// current-page marker the filled outline-pill look. Resting box, colours,
// typography and hover/focus come from core-query-pagination.js.
module.exports = {
	css: [
		'&{display:flex;flex-wrap:wrap;align-items:center;gap:var(--wp--preset--spacing--200)}',
		'& .page-numbers.current{',
		'border:1px solid var(--wp--preset--color--contrast);',
		'border-radius:0;',
		'padding:calc(var(--wp--preset--spacing--200) - 1px) calc(var(--wp--preset--spacing--300) - 1px);',
		'background-color:var(--wp--preset--color--contrast);',
		'color:var(--wp--preset--color--white)}',
	].join( '' ),
};
