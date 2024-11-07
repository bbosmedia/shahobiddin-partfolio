import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Shahobiddin Shoazizov - Interior and Exterior Designer',
	description:
		'I am Shahobiddin Shoazizov. I am a professional Interior and Exterior Designer. I have more than 5 years experience.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<Script
					id='google-analytics'
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZJZ2Z7C');`,
					}}
				/>
			</head>
			<body className={inter.className}>
				<iframe
					src='https://www.googletagmanager.com/ns.html?id=GTM-PZJZ2Z7C'
					height='0'
					width='0'
					style={{ display: 'none', visibility: 'hidden' }}
				></iframe>
				{children}
			</body>
		</html>
	);
}
