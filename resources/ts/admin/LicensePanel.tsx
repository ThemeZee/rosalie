/**
 * License Settings section: activate or deactivate the theme license.
 */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import {
	BaseControl,
	TextControl,
	Button,
	Notice,
	Spinner,
	Flex,
} from '@wordpress/components';

import type {
	LicenseRequest,
	LicenseResponse,
	LicenseState,
	PanelNotice,
} from './types';

interface LicensePanelProps {
	initialState: Partial< LicenseState >;
	restNamespace: string;
}

export default function LicensePanel( {
	initialState,
	restNamespace,
}: LicensePanelProps ) {
	const [ state, setState ] = useState< LicenseState >( {
		active: !! initialState.active,
		status: initialState.status || 'inactive',
		keyMasked: initialState.keyMasked || '',
	} );
	const [ key, setKey ] = useState( '' );
	const [ isBusy, setIsBusy ] = useState( false );
	const [ notice, setNotice ] = useState< PanelNotice | null >( null );

	const request = async ( data: LicenseRequest ) => {
		setIsBusy( true );
		setNotice( null );

		try {
			const response = await apiFetch< LicenseResponse >( {
				path: `/${ restNamespace }/license`,
				method: 'POST',
				data,
			} );
			setState( {
				active: !! response.active,
				status: response.status,
				keyMasked: response.keyMasked || '',
			} );
			setNotice( {
				status: response.type === 'success' ? 'success' : 'error',
				message: response.message,
			} );
			if ( response.active ) {
				setKey( '' );
			}
		} catch ( error ) {
			setNotice( {
				status: 'error',
				message:
					error instanceof Error
						? error.message
						: __(
								'The request could not be completed.',
								'rosalie'
						  ),
			} );
		} finally {
			setIsBusy( false );
		}
	};

	return (
		<div className="rosalie-theme-setup__section">
			<p className="rosalie-theme-setup__hint">
				{ state.active
					? __( 'You are receiving updates.', 'rosalie' )
					: __(
							'An active license key is needed to install updates and receive support.',
							'rosalie'
					  ) }
			</p>
			<BaseControl
				__nextHasNoMarginBottom
				id="rosalie-license-status"
				className="rosalie-license-status"
				label={ __( 'License Status', 'rosalie' ) }
			>
				<span
					className={ `rosalie-license-badge rosalie-license-badge--${
						state.active ? 'active' : 'inactive'
					}` }
				>
					{ state.active
						? __( 'Active', 'rosalie' )
						: __( 'Inactive', 'rosalie' ) }
				</span>
			</BaseControl>

			{ state.active ? (
				<>
					<TextControl
						__nextHasNoMarginBottom
						label={ __( 'License Key', 'rosalie' ) }
						value={ state.keyMasked }
						onChange={ () => undefined }
						readOnly
						disabled
					/>
					<Flex
						justify="flex-start"
						className="rosalie-theme-setup__actions"
					>
						<Button
							variant="secondary"
							isDestructive
							onClick={ () =>
								request( { action: 'deactivate' } )
							}
							disabled={ isBusy }
							__next40pxDefaultSize
						>
							{ isBusy
								? __( 'Working…', 'rosalie' )
								: __( 'Deactivate License', 'rosalie' ) }
						</Button>
						{ isBusy && <Spinner /> }
					</Flex>
				</>
			) : (
				<>
					<TextControl
						__nextHasNoMarginBottom
						label={ __( 'License Key', 'rosalie' ) }
						value={ key }
						onChange={ setKey }
						placeholder={ __(
							'Enter your license key',
							'rosalie'
						) }
					/>
					<Flex
						justify="flex-start"
						className="rosalie-theme-setup__actions"
					>
						<Button
							variant="primary"
							onClick={ () =>
								request( { action: 'activate', key } )
							}
							disabled={ isBusy || ! key }
							__next40pxDefaultSize
						>
							{ isBusy
								? __( 'Activating…', 'rosalie' )
								: __( 'Activate License', 'rosalie' ) }
						</Button>
						{ isBusy && <Spinner /> }
					</Flex>
				</>
			) }

			{ notice && (
				<Notice
					status={ notice.status }
					onRemove={ () => setNotice( null ) }
					className="rosalie-theme-setup__notice"
				>
					{ notice.message }
				</Notice>
			) }
		</div>
	);
}
