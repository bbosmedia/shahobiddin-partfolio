import HomeHero from '@/components/sections/home-hero';
import React from 'react';
import Services from '@/components/sections/services';
import GallerySection from '@/components/sections/galley-section';
import HomeParallax from '@/components/sections/home-parallax';
import PortfolioSection from '@/components/sections/portolio-section';

const Home = () => {
	return (
		<>
			<HomeHero />
			<GallerySection />
			<PortfolioSection />
			<Services />
			<HomeParallax />
		</>
	);
};

export default Home;
