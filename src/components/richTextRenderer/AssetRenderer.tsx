/* eslint-disable @next/next/no-img-element */
import {useContentfulAssetUrl} from '@/hooks/useContentfulUrl';
import {Node} from '@contentful/rich-text-types';
import React from 'react';

export function AssetRenderer(props: Node) {
	const {data} = props;
	const asset: any = data.target;
	const url = useContentfulAssetUrl(asset);
	const imageSize = asset.fields.file?.details.image 
	return (
		<img
			src={url}
			alt={asset.fields?.description}
			width={imageSize?.width}
			height={imageSize?.height}
		/>
	);
}
