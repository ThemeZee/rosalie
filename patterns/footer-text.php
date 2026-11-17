<?php
/**
 * Title: Footer Text
 * Slug: rosalie/footer-text
 * Inserter: no
 *
 * @package Rosalie
 */

?>

<!-- wp:paragraph {"fontSize":"body-sm"} -->
<p class="has-body-sm-font-size">&copy; <?php echo wp_kses_post( date_i18n( 'Y' ) . ' ' . get_bloginfo( 'name' ) ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"body-sm"} -->
<p class="has-body-sm-font-size"><a href="#"><?php esc_html_e( 'Privacy Policy', 'rosalie' ); ?></a> &middot; <a href="#"><?php esc_html_e( 'Imprint', 'rosalie' ); ?></a></p>
<!-- /wp:paragraph -->
