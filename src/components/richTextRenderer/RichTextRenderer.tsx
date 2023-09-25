import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {Document} from '@contentful/rich-text-types';

import React from 'react';
import {CtfRichTextOptions} from './Options';

export function RichTextRenderer(props: {body: Document; className?: string}) {
	const {body, className} = props;
	return (
		<div className={`content-typography ${className}`}>
			{documentToReactComponents(body, CtfRichTextOptions)}
		</div>
	);
}
