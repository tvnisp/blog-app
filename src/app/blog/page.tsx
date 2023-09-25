import {getBlogs} from '@/lib/server/contentful';
import {IBlog, IBlogFields} from '@/types/generated/contentful';
import {getContentfulAssetDetails} from '@/utils/getContentfulAssetUrl';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
	const {items} = await getBlogs();
	const blogs = items as IBlog[];

	return (
		<main className='flex flex-col w-full max-w-7xl mx-auto px-5'>
			<div className='grid md:grid-cols-3 gap-4 pb-4'>
				{blogs.map((blog, index) => {
					const {
						title,
						description,
						tags,
						category,
						featuredImage,
						slug,
					} = blog.fields as IBlogFields;
					const {url, description: imageDesc} =
						getContentfulAssetDetails(featuredImage!);
					const blogUrl = `/blog/${slug}`;

					return (
						<div
							key={index}
							className='max-w-lg flex flex-col items-start justify-between mx-auto bg-white shadow-md border border-gray-200 rounded-lg h-full'
						>
							<div>
								<Link href={blogUrl}>
									<Image
										width={500}
										height={300}
										className='rounded-t-lg'
										src={url}
										alt={imageDesc as string}
									/>
								</Link>
								<div className='p-5'>
									<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2'>
										{title}
									</h5>
									<p className='font-normal text-gray-700 mb-3'>
										{description}
									</p>
									<p className='mb-3'>Category: {category}</p>
									<p>
										Tags:{' '}
										{tags?.map((tag, index) =>
											index === tags.length - 1
												? `#${tag}`
												: `#${tag}, `
										)}
									</p>
								</div>
							</div>

							<div className='p-5'>
								<Link
									className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center'
									href={blogUrl}
								>
									Read more
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
}
