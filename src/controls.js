/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';

/**
 *  Internal dependencies
 */
import { AQL } from './variations';
import { PostMetaControls } from './post-meta-controls';
import { PostCountControls } from './post-count-controls';

/**
 * Determines if the active variation is this one
 *
 * @param {*} props
 * @return {boolean} Is this the correct variation?
 */
const isAdvancedQueryLoop = (props) => {
	const {
		attributes: { namespace, query: { inherit } = {} },
	} = props;
	return namespace && namespace === AQL && inherit === false;
};

/**
 * Custom controls
 *
 * @param {*} BlockEdit
 * @return {Element} BlockEdit instance
 */
const withAdvancedQueryControls = (BlockEdit) => (props) => {
	// If the is the correct variation, add the custom controls.
	return isAdvancedQueryLoop(props) ? (
		<>
			<BlockEdit {...props} />
			<InspectorControls>
				<PostCountControls {...props} />
				<PostMetaControls {...props} />
				{/** Our custom component */}
			</InspectorControls>
		</>
	) : (
		<BlockEdit {...props} />
	);
};

addFilter('editor.BlockEdit', 'core/query', withAdvancedQueryControls);
