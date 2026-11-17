<?php
/**
 * Block pattern category registration.
 *
 * @package ThemeZee\Rosalie
 */

declare(strict_types=1);

namespace ThemeZee\Rosalie\Setup;

use WP_Block_Pattern_Categories_Registry;

/**
 * Registers the block pattern categories used by the theme patterns.
 */
class BlockPatternCategory {

	/**
	 * Register the block pattern categories.
	 */
	public function __invoke(): void {
		$categories = array(
			'rosalie_about'        => array( 'label' => __( 'Rosalie: About', 'rosalie' ) ),
			'rosalie_categories'   => array( 'label' => __( 'Rosalie: Categories', 'rosalie' ) ),
			'rosalie_contributors' => array( 'label' => __( 'Rosalie: Contributors', 'rosalie' ) ),
			'rosalie_hero'         => array( 'label' => __( 'Rosalie: Hero', 'rosalie' ) ),
			'rosalie_highlights'   => array( 'label' => __( 'Rosalie: Highlights', 'rosalie' ) ),
			'rosalie_newsletter'   => array( 'label' => __( 'Rosalie: Newsletter', 'rosalie' ) ),
			'rosalie_posts'        => array( 'label' => __( 'Rosalie: Posts', 'rosalie' ) ),
			'rosalie_query_loops'  => array( 'label' => __( 'Rosalie: Query Loops', 'rosalie' ) ),
			'rosalie_testimonials' => array( 'label' => __( 'Rosalie: Testimonials', 'rosalie' ) ),
		);

		foreach ( $categories as $name => $properties ) {
			if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {
				register_block_pattern_category( $name, $properties );
			}
		}
	}
}
