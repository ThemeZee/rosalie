/**
 * Demo Content / License Settings sections.
 *
 * Only this interactive part is hydrated client-side; the rest of the Theme
 * Setup page (header, links, screenshot, documentation) is server-rendered.
 * Each section is a plain heading plus its fields on the default admin
 * background — no card or collapsible wrapper.
 */
import { __ } from '@wordpress/i18n';

import DemoContentPanel from './DemoContentPanel';
import LicensePanel from './LicensePanel';
import type { ThemeSetupBootstrap } from './types';

export default function App() {
	const bootstrap: ThemeSetupBootstrap = window.rosalieThemeSetup || {};
	const restNamespace = bootstrap.restNamespace || 'rosalie/v1';

	return (
		<div className="rosalie-theme-setup__columns">
			<section className="rosalie-theme-setup__group">
				<h3>{ __( 'Demo Content', 'rosalie' ) }</h3>
				<DemoContentPanel
					parts={ bootstrap.demoParts || [] }
					restNamespace={ restNamespace }
				/>
			</section>

			<section className="rosalie-theme-setup__group">
				<h3>{ __( 'License Settings', 'rosalie' ) }</h3>
				<LicensePanel
					initialState={ bootstrap.license || {} }
					restNamespace={ restNamespace }
				/>
			</section>
		</div>
	);
}
