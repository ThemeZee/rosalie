<?php
/**
 * Tests for block style registration.
 *
 * @package ThemeZee\Rosalie
 */

declare(strict_types=1);

namespace ThemeZee\Rosalie\Tests\Setup;

use Brain\Monkey\Functions;
use ThemeZee\Rosalie\Setup\BlockStyle;
use ThemeZee\Rosalie\Tests\TestCase;

final class BlockStyleTest extends TestCase {

	public function test_registers_each_block_style(): void {
		$registered = array();
		Functions\when( 'register_block_style' )->alias(
			static function ( $block, $properties ) use ( &$registered ) {
				$registered[] = $block . ':' . $properties['name'];
			}
		);

		( new BlockStyle() )();

		$this->assertSame(
			array(
				'core/navigation:main-navigation',
				'core/paragraph:overline',
				'core/heading:overline',
				'core/social-links:primary',
				'core/social-links:outline',
				'core/post-terms:outline',
			),
			$registered
		);
	}
}
