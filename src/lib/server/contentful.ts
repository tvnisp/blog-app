import {createClient} from 'contentful';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID as string,
	environment: process.env.CONTENTFUL_ENVIRONMENT as string,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const getBlogs = async () => {
	const blogs = await client.getEntries({content_type: 'blog'});
	return blogs;
};

export const getBlog = async (slug: string) => {
	const blog = await client.getEntries({
		content_type: 'blog',
		include: 10,
		'fields.slug': slug,
	});

	return blog.items.find(blog => blog.fields);
};
