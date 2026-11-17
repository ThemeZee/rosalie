<?php
/**
 * Editor asset handling.
 *
 * @package ThemeZee\Rosalie
 */

declare(strict_types=1);

namespace ThemeZee\Rosalie\Assets;

/**
 * Registers the block editor stylesheet.
 */
class Editor {
	/**
	 * Add the editor stylesheet.
	 */
	public function __invoke(): void {
		add_editor_style( 'assets/editor.css' );
	}
}
