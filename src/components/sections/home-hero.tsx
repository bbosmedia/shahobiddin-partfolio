'use client';
import { useGSAP } from '@gsap/react';
import React, { lazy, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HomeHeroBg = lazy(() => import('./home-hero-bg'));

const HomeHero = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(contentRef.current, {
			scale: 0.8,
			opacity: 0,
			top: 180,
			scrollTrigger: {
				trigger: sectionRef.current,
				start: '180 top',
				end: '700 top',
				scrub: 1.0,
			},
		});
	});

	return (
		<section
			ref={sectionRef}
			className='h-full min-h-screen md:py-[120px] py-20 relative overflow-hidden bg-black md:pb-[38px] flex items-center justify-center'
		>
			<HomeHeroBg />

			<div
				ref={contentRef}
				className='flex justify-center items-center flex-col px-5 relative w-max mx-auto md:w-full z-[2]'
			>
				<h1 className='home-heading-text md:text-6xl font-medium   w-full text-center gradient-text-light dark:gradient-text relative text-3xl text-white uppercase'>
					Shoazizov Architects
				</h1>
				<p className='block max-w-[632px] w-full text-center text-white/50 font-medium text-lg mt-4'>
					I create beautiful and practical designs to improve your home or
					workspace.
				</p>
				<p className='text-center text-lg text-white block mt-6'>
					Shakhobiddin Shoazizov
				</p>
				<div className='flex items-center gap-3 mt-[51px] relative'></div>
			</div>
		</section>
	);
};

export default HomeHero;
