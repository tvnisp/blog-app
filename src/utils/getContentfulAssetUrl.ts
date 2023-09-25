import {Asset, AssetFields, AssetFile} from 'contentful';
import _ from 'lodash';

export function getContentfulAssetDetails(image: Asset) {
	return {
		url: `https:${image.fields.file?.url}`,
		description: image.fields.description,
	};
}

export interface IContentfulAssetUrlParams {
	relativeUrl: AssetFile['url'];
	props?: {
		w?: string;
		h?: string;
		r?: string;
		fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
	};
}

export function contentfulAssetUrl(
	relativeUrl: IContentfulAssetUrlParams['relativeUrl'],
	props?: IContentfulAssetUrlParams['props']
) {
	if (relativeUrl) {
		return `https:${relativeUrl}${
			props
				? `?${new URLSearchParams(
						_.omitBy(props, _.isUndefined)
				  ).toString()}`
				: ''
		}`;
	}

	return '';
}
