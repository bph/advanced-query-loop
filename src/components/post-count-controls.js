/**
 * WordPress dependencies
 */
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * PostCountControls component
 *
 * @param {*} param0
 * @return {Element} PostCountControls
 */
export const PostCountControls = ( { attributes, setAttributes } ) => {
	const { query: { perPage, offset = 0 } = {} } = attributes;

	return (
		<PanelBody title={ __( 'Post Count', 'advanced-query-loop' ) }>
			<RangeControl
				label={ __( 'Posts Per Page', 'advanced-query-loop' ) }
				min={ 1 }
				max={ 50 }
				onChange={ ( newCount ) => {
					setAttributes( {
						query: {
							...attributes.query,
							perPage: newCount,
							offset,
						},
					} );
				} }
				value={ perPage }
			/>
		</PanelBody>
	);
};
