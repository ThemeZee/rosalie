<?php
/**
 * Tests for removing the default WordPress patterns and categories.
 *
 * @package ThemeZee\Rosalie
 */

declare(strict_types=1);

namespace ThemeZee\Rosalie\Tests\Setup;

use Brain\Monkey\Functions;
use ThemeZee\Rosalie\Setup\DefaultBlockPatterns;
use ThemeZee\Rosalie\Tests\TestCase;
use WP_Block_Pattern_Categories_Registry;
use WP_Block_Patterns_Registry;

final class DefaultBlockPatternsTest extends TestCase {

	protected function tearDown(): void {
		WP_Block_Patterns_Registry::$instance            = null;
		WP_Block_Pattern_Categories_Registry::$instance = null;
		parent::tearDown();
	}

	public function test_remove_theme_support_drops_core_block_patterns(): void {
		Functions\expect( 'remove_theme_support' )
			->once()
			->with( 'core-block-patterns' );

		( new DefaultBlockPatterns() )->removeThemeSupport();
	}

	public function test_unregister_defaults_removes_core_patterns_and_unused_categories(): void {
		$patterns = new class() {
			/** @var array<string, array<string, mixed>> */
			public array $registered = array();

			/** @return array<int, array<string, mixed>> */
			public function get_all_registered(): array {
				return array_values( $this->registered );
			}
		};
		$patterns->registered = array(
			'core/cover-a' => array(
				'name'       => 'core/cover-a',
				'source'     => 'core',
				'categories' => array( 'core-banner' ),
			),
			'rosalie/hero'  => array(
				'name'       => 'rosalie/hero',
				'source'     => 'theme',
				'categories' => array( 'rosalie_hero' ),
			),
		);
		WP_Block_Patterns_Registry::$instance = $patterns;

		$categories = new class() {
			/** @var array<string, array<string, mixed>> */
			public array $registered = array();

			/** @return array<int, array<string, mixed>> */
			public function get_all_registered(): array {
				return array_values( $this->registered );
			}
		};
		$categories->registered = array(
			'core-banner' => array( 'name' => 'core-banner' ),
			'rosalie_hero' => array( 'name' => 'rosalie_hero' ),
			'orphan'      => array( 'name' => 'orphan' ),
		);
		WP_Block_Pattern_Categories_Registry::$instance = $categories;

		$unregisteredPatterns   = array();
		$unregisteredCategories = array();

		Functions\when( 'unregister_block_pattern' )->alias(
			static function ( $name ) use ( $patterns, &$unregisteredPatterns ) {
				$unregisteredPatterns[] = $name;
				unset( $patterns->registered[ $name ] );
			}
		);
		Functions\when( 'unregister_block_pattern_category' )->alias(
			static function ( $name ) use ( &$unregisteredCategories ) {
				$unregisteredCategories[] = $name;
			}
		);

		( new DefaultBlockPatterns() )->unregisterDefaults();

		// The core pattern is unregistered; the theme pattern stays.
		$this->assertSame( array( 'core/cover-a' ), $unregisteredPatterns );

		// Categories no remaining pattern references are removed; the one the
		// theme pattern still uses is kept.
		$this->assertContains( 'core-banner', $unregisteredCategories );
		$this->assertContains( 'orphan', $unregisteredCategories );
		$this->assertNotContains( 'rosalie_hero', $unregisteredCategories );
	}
}
