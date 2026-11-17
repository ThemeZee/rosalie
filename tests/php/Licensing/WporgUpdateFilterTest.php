<?php
/**
 * Tests for the WordPress.org update-check filter.
 *
 * @package ThemeZee\Rosalie
 */

declare(strict_types=1);

namespace ThemeZee\Rosalie\Tests\Licensing;

use Brain\Monkey\Functions;
use ThemeZee\Rosalie\Licensing\WporgUpdateFilter;
use ThemeZee\Rosalie\Tests\TestCase;

final class WporgUpdateFilterTest extends TestCase {

	private const UPDATE_URL = 'https://api.wordpress.org/themes/update-check/1.1/';

	public function test_leaves_unrelated_requests_untouched(): void {
		$args   = array( 'body' => array( 'themes' => '{"themes":{"rosalie":{}}}' ) );
		$filter = new WporgUpdateFilter();

		$this->assertSame(
			$args,
			$filter( $args, 'https://api.wordpress.org/core/version-check/1.7/' )
		);
	}

	public function test_leaves_requests_without_themes_untouched(): void {
		$args   = array( 'body' => array() );
		$filter = new WporgUpdateFilter();

		$this->assertSame( $args, $filter( $args, self::UPDATE_URL ) );
	}

	public function test_strips_the_active_parent_and_child_theme(): void {
		Functions\when( 'get_option' )->alias(
			static fn( $name ) => 'template' === $name ? 'rosalie' : 'rosalie-child'
		);
		Functions\when( 'wp_json_encode' )->alias(
			static fn( $data ) => json_encode( $data )
		);

		$args = array(
			'body' => array(
				'themes' => json_encode(
					array(
						'themes' => array(
							'rosalie'       => array( 'Name' => 'Rosalie' ),
							'rosalie-child' => array( 'Name' => 'Rosalie Child' ),
							'twentytwenty' => array( 'Name' => 'Twenty Twenty' ),
						),
					)
				),
			),
		);

		$result = ( new WporgUpdateFilter() )( $args, self::UPDATE_URL );
		$themes = json_decode( $result['body']['themes'], true )['themes'];

		$this->assertArrayNotHasKey( 'rosalie', $themes );
		$this->assertArrayNotHasKey( 'rosalie-child', $themes );
		$this->assertArrayHasKey( 'twentytwenty', $themes );
	}
}
