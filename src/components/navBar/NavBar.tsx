'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function NavBar() {
	const pathName = usePathname();
	return (
		<header className='flex flex-col w-full max-w-7xl mx-auto p-6'>
			<nav>
				<ul className='list-none flex m-0 gap-4'>
					<li className={pathName === '/' ? 'font-bold' : ''}>
						<Link href='/'>Home</Link>
					</li>
					<li className={pathName.startsWith('/blog') ? 'font-bold' : ''}>
						<Link href='/blog'>Blog</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
