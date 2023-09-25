import {
	IContentfulAssetUrlParams,
	contentfulAssetUrl,
} from '@/utils/getContentfulAssetUrl';
import {Asset} from 'contentful';

import React from 'react';

export function useContentfulUrl(
	relativeUrl: IContentfulAssetUrlParams['relativeUrl'],
	props?: IContentfulAssetUrlParams['props']
) {
	const url = React.useMemo(
		() => contentfulAssetUrl(relativeUrl, props),
		[relativeUrl, props]
	);
	return url;
}

export function useContentfulAssetUrl(
	asset: Asset,
	props?: IContentfulAssetUrlParams['props']
) {
	const assetUrl = asset.fields.file?.url
	const url = useContentfulUrl(assetUrl as string, props);
	return url;
}
