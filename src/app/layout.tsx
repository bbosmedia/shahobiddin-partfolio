import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import FlagshipProvider from "@/components/layout/flagship-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shahobiddin Shoazizov - Interior and Exterior Designer",
	description:
		"I am Shahobiddin Shoazizov. I am a professional Interior and Exterior Designer. I have more than 5 years experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<Script
					async={true}
					src={`https://www.googletagmanager.com/gtag/js?id=G-MFTK1GKZ42`}
				/>

				<Script
					id="google-analytics"
					dangerouslySetInnerHTML={{
						__html: ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MFTK1GKZ42');`,
					}}
				/>
			</head>
			<body className={inter.className}>
				<FlagshipProvider>{children}</FlagshipProvider>
			</body>
		</html>
	);
}
