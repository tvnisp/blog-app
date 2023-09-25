import {Options} from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES} from '@contentful/rich-text-types';

import {AssetRenderer} from './AssetRenderer';

export const CtfRichTextOptions: Options = {
	renderNode: {
		// eslint-disable-next-line react/no-unstable-nested-components
		[BLOCKS.EMBEDDED_ASSET]: AssetRenderer,
	},
};
