<?php
/**
 * License reminder notice.
 *
 * @package ThemeZee\Rosalie
 */

declare(strict_types=1);

namespace ThemeZee\Rosalie\Licensing;

use ThemeZee\Rosalie\Core\SettingsRepository;
use ThemeZee\Rosalie\Core\ThemeConfig;

/**
 * Shows an admin notice reminding the user to activate the license when it is
 * not yet active.
 */
class Reminder {

	/**
	 * Constructor.
	 *
	 * @param ThemeConfig        $config   The theme configuration.
	 * @param SettingsRepository $settings The settings repository.
	 */
	public function __construct(
		private readonly ThemeConfig $config,
		private readonly SettingsRepository $settings,
	) {
	}

	/**
	 * Render the reminder notice on relevant admin screens.
	 */
	public function render(): void {
		global $pagenow;

		if ( $this->settings->hasValidLicense() ) {
			return;
		}

		if ( ! current_user_can( $this->config->capability() ) ) {
			return;
		}

		$screens = array( 'index.php', 'update-core.php', 'themes.php' );
		if ( ! in_array( $pagenow, $screens, true ) || isset( $_GET['page'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			return;
		}

		printf(
			'<div class="notice notice-info"><p>%s</p></div>',
			wp_kses_post(
				sprintf(
					/* translators: %1$s: Theme name. %2$s: URL of the theme settings page. */
					__( 'Please enter your license key for the %1$s theme in order to receive updates and support. <a href="%2$s">Enter License Key</a>', 'rosalie' ),
					esc_html( $this->config->name() ),
					esc_url( $this->config->pageUrl() )
				)
			)
		);
	}
}
