const CONTRAST = 'var(--wp--preset--color--contrast)';
const WHITE = 'var(--wp--preset--color--white)';

// Shared `css` for both Social Icons variations — the parts no design key can
// express. `&` is the social-link selector (the `<li>`):
// - the smooth transition;
// - roomier icon padding on the inner anchor (design keys reach only the
//   social-link block, not its anchor), matched across variations;
// - resetting the design-key border/background/colour the editor otherwise
//   applies twice (the inner anchor also carries `wp-block-social-link`), so the
//   button inherits the `<li>` fill in every state, as on the frontend.
const ICON_BASE =
	'&:not(.wp-block-social-link-anchor){transition:all 0.2s ease-in-out}' +
	'& .wp-block-social-link-anchor{padding:0.35em}' +
	'&.wp-block-social-link-anchor{border:0;background-color:transparent;color:inherit}';

// Hover/focus fill (pseudo-class states aren't valid theme.json keys here). On
// hover it also suppresses core's scale-up (`.wp-block-social-link:hover`, 0-2-0)
// which this 0-1-0 `css` only beats with `!important` — safe, there is no editor
// control for `transform`.
const fill = ( background, text ) =>
	`&:not(.wp-block-social-link-anchor):hover{background-color:${ background };color:${ text };transform:none !important}` +
	`&:not(.wp-block-social-link-anchor):focus-within{background-color:${ background };color:${ text }}`;

module.exports = {
	variations: {
		// Outline — a transparent, ink-bordered icon that fills on hover.
		outline: {
			blocks: {
				'core/social-link': {
					border: {
						color: 'var:preset|color|contrast',
						style: 'solid',
						width: '1px',
					},
					color: {
						background: 'transparent',
						text: 'var:preset|color|contrast',
					},
					css: ICON_BASE + fill( CONTRAST, WHITE ),
				},
			},
		},

		// Primary — the inverse: a solid ink icon with white glyphs that flips to
		// the Outline look on hover. Same box model so icons stay the same size.
		primary: {
			blocks: {
				'core/social-link': {
					border: {
						color: 'var:preset|color|contrast',
						style: 'solid',
						width: '1px',
					},
					color: {
						background: 'var:preset|color|contrast',
						text: 'var:preset|color|white',
					},
					css: ICON_BASE + fill( 'transparent', CONTRAST ),
				},
			},
		},
	},
};
