import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ContactSection from "@/components/sections/contact-section";
import React, { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Navbar />
			<main className="min-h-screen">{children}</main>
			<Footer />
			<ContactSection />
		</>
	);
};

export default RootLayout;
