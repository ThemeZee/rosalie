<?php
/**
 * Frontend asset handling.
 *
 * @package ThemeZee\Rosalie
 */

declare(strict_types=1);

namespace ThemeZee\Rosalie\Assets;

/**
 * Enqueues the frontend stylesheet.
 */
class Frontend {

	private const FRONTEND_HANDLE = 'rosalie-frontend';

	/**
	 * Constructor.
	 *
	 * @param string $assetsPath The base filesystem path to the theme assets directory.
	 * @param string $assetsUrl  The base URL to the theme assets directory.
	 */
	public function __construct(
		private readonly string $assetsPath,
		private readonly string $assetsUrl,
	) {
	}

	/**
	 * Enqueue the frontend stylesheet.
	 */
	public function __invoke(): void {
		$assetFile = "{$this->assetsPath}/frontend.asset.php";

		if ( ! file_exists( $assetFile ) ) {
			return;
		}

		$asset = include $assetFile;

		wp_enqueue_style(
			self::FRONTEND_HANDLE,
			"{$this->assetsUrl}/frontend.css",
			$asset['dependencies'] ?? array(),
			$asset['version'] ?? false,
		);
	}
}
