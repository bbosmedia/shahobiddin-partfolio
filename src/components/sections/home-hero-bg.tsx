'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Lenis from 'lenis';

const HomeHeroBg = () => {
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
			<Image
				fill
				src='/images/hero.webp'
				alt='Shoazizov Architects'
				objectFit='cover'
				priority
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
