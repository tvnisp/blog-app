import NavBar from "@/components/navBar/NavBar";
import "./globals.scss"

export const metadata = {
	title: 'Blog',
	description: 'This is the blog page',
};

export default function RootLayout({children}: {children: React.ReactNode}) {

	return (
		<html lang='en'>
			<body>
                <NavBar />
				{children}
			</body>
		</html>
	);
}
