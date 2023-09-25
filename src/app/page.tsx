import Link from 'next/link';

export default async function Page() {
	return (
		<main className='flex flex-col w-full max-w-7xl mx-auto'>
			<Link href='/blog' className='mt-10'>
				<h1 className='text-7xl underline'>Go to the blogs page</h1>
			</Link>
		</main>
	);
}
