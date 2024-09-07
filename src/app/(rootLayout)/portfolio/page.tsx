"use client"
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import React, { useEffect } from "react";
import data from "@/data/porfolio.json"
import ParallaxImage from '@/components/ui/parallax-image'
import Services from '@/components/sections/services'
import HomeParallax from '@/components/sections/home-parallax'
import Lenis from "lenis"

const Page = () => {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);

			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<Container className="md:pt-[160px] pt-[120px]">
				<Heading
					variant="h2"
					className="text-white mb-10 block"
				>
					Designing Beautiful Spaces
				</Heading>
				<p className="block max-w-2xl max-md:text-sm mt-2 text-white/50">
					Specializing in both interior and exterior design, I create spaces
					that reflect your style and enhance your environment. Explore my
					portfolio to see how thoughtful design can transform any space.
				</p>
			</Container>
			<div className="-space-y-10 mt-20 block">
				{data.map((image, index) => (
					<ParallaxImage
						key={index}
						src={image.preview}
						alt={image.title}
						link={`/portfolio/${image.id}`}
					/>
				))}
			</div>
			<Services />
			<HomeParallax />
		</>
	);
};

export default Page;
