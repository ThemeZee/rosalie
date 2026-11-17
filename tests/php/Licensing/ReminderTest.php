<?php
/**
 * Tests for the license reminder notice.
 *
 * @package ThemeZee\Rosalie
 */

declare(strict_types=1);

namespace ThemeZee\Rosalie\Tests\Licensing;

use Brain\Monkey\Functions;
use Mockery;
use ThemeZee\Rosalie\Core\SettingsRepository;
use ThemeZee\Rosalie\Licensing\Reminder;
use ThemeZee\Rosalie\Tests\TestCase;

final class ReminderTest extends TestCase {

	protected function setUp(): void {
		parent::setUp();
		Functions\when( 'admin_url' )->justReturn( 'https://site.test/wp-admin/themes.php?page=rosalie-theme' );
		unset( $_GET['page'] );
	}

	protected function tearDown(): void {
		unset( $_GET['page'] );
		parent::tearDown();
	}

	private function reminder( bool $hasValidLicense ): Reminder {
		$settings = Mockery::mock( SettingsRepository::class );
		$settings->shouldReceive( 'hasValidLicense' )->andReturn( $hasValidLicense );

		return new Reminder( $this->themeConfig(), $settings );
	}

	private function render( Reminder $reminder, string $pagenow ): string {
		$GLOBALS['pagenow'] = $pagenow;

		ob_start();
		$reminder->render();

		return (string) ob_get_clean();
	}

	public function test_prints_nothing_when_the_license_is_valid(): void {
		Functions\when( 'current_user_can' )->justReturn( true );

		$this->assertSame( '', $this->render( $this->reminder( true ), 'themes.php' ) );
	}

	public function test_prints_nothing_without_the_capability(): void {
		Functions\when( 'current_user_can' )->justReturn( false );

		$this->assertSame( '', $this->render( $this->reminder( false ), 'themes.php' ) );
	}

	public function test_prints_nothing_on_an_unrelated_screen(): void {
		Functions\when( 'current_user_can' )->justReturn( true );

		$this->assertSame( '', $this->render( $this->reminder( false ), 'edit.php' ) );
	}

	public function test_prints_nothing_on_the_theme_settings_page_itself(): void {
		Functions\when( 'current_user_can' )->justReturn( true );
		$_GET['page'] = 'rosalie-theme';

		$this->assertSame( '', $this->render( $this->reminder( false ), 'themes.php' ) );
	}

	public function test_prints_the_reminder_on_a_relevant_screen(): void {
		Functions\when( 'current_user_can' )->justReturn( true );

		$output = $this->render( $this->reminder( false ), 'index.php' );

		$this->assertStringContainsString( 'notice-info', $output );
		$this->assertStringContainsString( 'license key', $output );
		$this->assertStringContainsString( 'Rosalie', $output );
	}
}
