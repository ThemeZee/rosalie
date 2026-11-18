<?php
/**
 * Title: Blog Posts (Grid)
 * Slug: rosalie/blog-posts-grid
 * Categories: rosalie_posts
 *
 * @package Rosalie
 */

?>

<!-- wp:group {"align":"wide","className":"rosalie-section","style":{"border":{"top":{"color":"var:preset|color|primary-200","width":"1px"}},"spacing":{"padding":{"top":"var:preset|spacing|1000","bottom":"var:preset|spacing|1000"},"blockGap":"var:preset|spacing|600"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide rosalie-section" style="border-top-color:var(--wp--preset--color--primary-200);border-top-width:1px;padding-top:var(--wp--preset--spacing--1000);padding-bottom:var(--wp--preset--spacing--1000)">

	<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|150"}},"layout":{"type":"constrained","contentSize":"640px"}} -->
	<div class="wp-block-group">

		<!-- wp:heading {"fontSize":"display-sm"} -->
		<h2 class="wp-block-heading has-display-sm-font-size">Guides to every corner of the coast.</h2>
		<!-- /wp:heading -->

	</div>
	<!-- /wp:group -->

	<!-- wp:query {"queryId":10,"query":{"perPage":6,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"displayLayout":{"type":"flex","columns":3},"align":"wide"} -->
	<div class="wp-block-query alignwide">

		<!-- wp:post-template {"style":{"spacing":{"blockGap":"var:preset|spacing|600"}}} -->

			<!-- wp:group {"layout":{"type":"constrained"}} -->
			<div class="wp-block-group">

				<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"3/2","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|300"}}}} /-->

				<!-- wp:post-terms {"term":"category"} /-->

				<!-- wp:post-title {"isLink":true,"style":{"spacing":{"margin":{"top":"var:preset|spacing|150","bottom":"var:preset|spacing|200"}}},"fontSize":"body-xl"} /-->

				<!-- wp:post-excerpt {"moreText":"Continue reading","excerptLength":18} /-->

			</div>
			<!-- /wp:group -->

		<!-- /wp:post-template -->

		<!-- wp:query-no-results -->

			<!-- wp:paragraph -->
			<p>No posts were found. Try a different search.</p>
			<!-- /wp:paragraph -->

		<!-- /wp:query-no-results -->

	</div>
	<!-- /wp:query -->

	<!-- wp:buttons {"align":"wide","style":{"spacing":{"margin":{"top":"var:preset|spacing|400"}}},"layout":{"type":"flex","justifyContent":"left"}} -->
	<div class="wp-block-buttons alignwide" style="margin-top:var(--wp--preset--spacing--400)">

		<!-- wp:button -->
		<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="<?php echo esc_url( home_url( '/blog/' ) ); ?>">Browse all stories</a></div>
		<!-- /wp:button -->

	</div>
	<!-- /wp:buttons -->

</div>
<!-- /wp:group -->
