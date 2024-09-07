"use client"
import React from "react";
import Heading from "../ui/heading";
import ParallaxImage from "../ui/parallax-image";
import data from "@/data/porfolio.json";
import { useRouter } from 'next/navigation'

const PortfolioSection = () => {
	const router = useRouter()
	return (
		<section>
			<div className="-space-y-10">
				{data.slice(0, 4).map((image, index) => (
					<ParallaxImage
						key={index}
						src={image.preview}
						alt={image.title}
						link={`/portfolio/${image.id}`}
					/>
				))}
				<div
					onClick={()=>router.push("/portfolio")}
					className="min-h-screen sticky top-0 left-0 w-full bg-black text-white flex items-center justify-center p-6 cursor-pointer"
				>
					<Heading variant="h2">Portfolio (+{data.length - 4})</Heading>
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
