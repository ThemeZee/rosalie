<?php
/**
 * Title: Newsletter (Banner)
 * Slug: rosalie/newsletter-banner
 * Categories: rosalie_newsletter
 *
 * @package Rosalie
 */

?>

<!-- wp:group {"align":"full","backgroundColor":"primary-200","className":"rosalie-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|1000","right":"var:preset|spacing|600","bottom":"var:preset|spacing|1000","left":"var:preset|spacing|600"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-primary-200-background-color has-background rosalie-section" style="padding-top:var(--wp--preset--spacing--1000);padding-right:var(--wp--preset--spacing--600);padding-bottom:var(--wp--preset--spacing--1000);padding-left:var(--wp--preset--spacing--600)">

	<!-- wp:columns {"align":"wide","verticalAlignment":"center","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|500","left":"var:preset|spacing|800"}}}} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">

		<!-- wp:column {"verticalAlignment":"center","width":"70%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:70%">

			<!-- wp:heading {"fontSize":"display-sm"} -->
			<h2 class="wp-block-heading has-display-sm-font-size">One good read, once a month.</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"style":{"spacing":{"margin":{"top":"var:preset|spacing|200"}}},"fontSize":"body-md"} -->
			<p class="has-body-md-font-size" style="margin-top:var(--wp--preset--spacing--200)">New stories and seasonal travel notes, straight to your inbox. No spam, unsubscribe any time.</p>
			<!-- /wp:paragraph -->

		</div>
		<!-- /wp:column -->

		<!-- wp:column {"verticalAlignment":"center","width":"30%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:30%">

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"right"}} -->
			<div class="wp-block-buttons">

				<!-- wp:button -->
				<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#">Subscribe</a></div>
				<!-- /wp:button -->

			</div>
			<!-- /wp:buttons -->

		</div>
		<!-- /wp:column -->

	</div>
	<!-- /wp:columns -->

</div>
<!-- /wp:group -->
