'use client';
import Image from 'next/image';
import  { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HomeHeroBg = () => {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 0.5,
			easing: (t) => 1 - Math.pow(1 - t, 3),
			smoothWheel: true,
		});

		// Expose lenis globally
		if(window){
			window.lenis = lenis;

			lenis.on("scroll", ScrollTrigger.update);

			function raf(time: number) {
				lenis.raf(time);
				requestAnimationFrame(raf);
			}

			requestAnimationFrame(raf);
		}

		return () => {
			lenis.destroy();
			delete window.lenis;
		};
	}, []);
	return (
		<>
			<Image
				fill
				src='/images/hero.webp'
				alt='Shoazizov Architects'
				objectFit='cover'
			/>

			<div
				className='absolute top-0 left-0 w-full h-full'
				style={{
					background:
						'radial-gradient(59.51% 75.63% at 59.74% 25%, rgba(0, 0, 0, 0.1) 0%, rgba(0,0,0,1) 100%)',
				}}
			></div>
		</>
	);
};

export default HomeHeroBg;
