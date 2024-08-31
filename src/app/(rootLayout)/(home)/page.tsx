"use client";
import HomeHero from "@/components/sections/home-hero";
import React, { useEffect } from "react";
import Lenis from "lenis";
import Services from "@/components/sections/services";
import GallerySection from "@/components/sections/galley-section";
import HomeParallax from "@/components/sections/home-parallax";

const Home = () => {
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
			<HomeHero />
			<GallerySection />
			<Services />
			<HomeParallax />
		</>
	);
};

export default Home;
