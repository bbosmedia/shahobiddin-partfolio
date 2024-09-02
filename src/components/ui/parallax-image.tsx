"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

interface ParallaxImageProps {
	src: string;
	alt: string;
	link?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, link }) => {
	const imageRef = useRef(null);
	const router = useRouter();
	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const image = imageRef.current;
		const height = window.innerHeight;

		gsap.fromTo(
			image,
			{ scale: 1 }, // Initial scale
			{
				scale: 1.2, // Final scale
				scrollTrigger: {
					trigger: image,
					start: "top top", // Start when the top of the image hits the top of the viewport
					end: `+=${height}`, // Adjust the end point as needed
					scrub: true, // Smoothly scrub the animation with the scroll// Keep the image sticky
				},
				ease: "linear", // Easing for smooth animation
			}
		);
	});
	return (
		<div
			onClick={() => {
				if (link) {
					router.push(link);
				}
			}}
			className="sticky group top-0 left-0 w-full h-screen overflow-hidden cursor-pointer"
		>
			<Image
				ref={imageRef}
				fill
				className="object-cover"
				src={src}
				alt={`${alt} - Shoazizov Architects`}
			/>
			<div className="absolute top-0 left-0 h-full w-full bg-black/20 flex items-center justify-center z-[2] transition-all duration-200 group-hover:translate-y-0 ease-linear p-6">
				<span className="text-white text-3xl md:text-4xl">Interior Design</span>
			</div>
		</div>
	);
};

export default ParallaxImage;
