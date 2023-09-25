import Link from 'next/link';
import Image from 'next/image';
import RichTextRenderer from '@/components/richTextRenderer';
import {getBlog, getBlogs} from '@/lib/server/contentful';
import {IPageParams} from '@/types';
import {IAuthorFields, IBlog, IBlogFields} from '@/types/generated/contentful';
import {getFormatedDate} from '@/utils/dateFormat';
import {getContentfulAssetDetails} from '@/utils/getContentfulAssetUrl';
import {Asset} from 'contentful';

export default async function Page(props: IPageParams) {
	const blog = (await getBlog(props.params.slug)) as IBlog;
	const {title, description, category, tags, body, featuredImage, author} =
		blog.fields as IBlogFields;
	const {firstName, lastName, profilePicture, job} =
		author?.fields as IAuthorFields;
	const date = new Date(blog.sys.createdAt);
	const formatedDate = getFormatedDate(date);
	const {url, description: profilePictureDescription} =
		getContentfulAssetDetails(profilePicture as Asset);
	const {url: featuredImageUrl, description: featuredImageDesc} =
		getContentfulAssetDetails(featuredImage as Asset);

	return (
		<main className='pt-8 pb-16 lg:pt-10 lg:pb-24 bg-white'>
			<div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
				<article className='mx-auto w-full max-w-2xl'>
					<div className='mb-4'>
						<Link href='/blog'>
							<button className='bg-zinc-800 px-4 py-2 rounded-lg text-white'>
								Go Back
							</button>
						</Link>
					</div>
					<header className='mb-4 lg:mb-6 not-format'>
						<address className='flex items-center mb-6 not-italic'>
							<div className='inline-flex items-center mr-3 text-sm text-gray-900'>
								<Image
									className='mr-4 w-16 h-16 rounded-full'
									src={url}
									width={50}
									height={50}
									alt={profilePictureDescription as string}
								/>
								<div>
									<Link
										href='#'
										rel='author'
										className='text-xl font-bold text-gray-900'
									>
										{`${firstName} ${lastName}`}
									</Link>
									<p className='text-base text-gray-500'>
										{job}
									</p>
									<p className='text-base text-gray-500'>
										<time title={formatedDate}>
											{formatedDate}
										</time>
									</p>
								</div>
							</div>
						</address>
						{title && (
							<h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl'>
								{title}
							</h1>
						)}
						{category && <p className='mb-2'>{category}</p>}
						{tags && (
							<p>
								{tags?.map((tag, index) =>
									index === tags.length - 1
										? `#${tag}`
										: `#${tag}, `
								)}
							</p>
						)}
					</header>
					<p className='mb-4 text-xl leading-relaxed text-gray'>
						{description}
					</p>
					<Image
						className='mb-4'
						src={featuredImageUrl}
						width={672}
						height={448}
						alt={featuredImageDesc as string}
					/>
					<RichTextRenderer className='blog-post' body={body!} />
				</article>
			</div>
		</main>
	);
}

export async function generateStaticParams() {
	const blogs = await getBlogs();
	return blogs.items.map(blog => ({
		slug: blog.fields.slug,
	}));
}
