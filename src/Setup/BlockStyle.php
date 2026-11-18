<?php
/**
 * Block style registration.
 *
 * @package ThemeZee\Rosalie
 */

declare(strict_types=1);

namespace ThemeZee\Rosalie\Setup;

/**
 * Registers the custom block styles provided by the theme.
 *
 * The visual styling for each block style lives in the theme stylesheet
 * (see `resources/scss/global/_block-styles.scss`) and is intentionally kept
 * free of `!important`, so any block setting a user configures in the editor
 * still overrides the block style defaults.
 */
class BlockStyle {

	/**
	 * Register the theme's block styles.
	 */
	public function __invoke(): void {
		register_block_style(
			'core/navigation',
			array(
				'name'  => 'main-navigation',
				'label' => __( 'Main Navigation', 'rosalie' ),
			)
		);

		register_block_style(
			'core/social-links',
			array(
				'name'  => 'primary',
				'label' => __( 'Primary', 'rosalie' ),
			)
		);

		register_block_style(
			'core/social-links',
			array(
				'name'  => 'outline',
				'label' => __( 'Outline', 'rosalie' ),
			)
		);

		register_block_style(
			'core/post-terms',
			array(
				'name'  => 'outline',
				'label' => __( 'Outline', 'rosalie' ),
			)
		);
	}
}
