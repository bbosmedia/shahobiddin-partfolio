"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const HomeParallax = () => {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	return (
		<div
			ref={container}
			className="h-[200px] lg:h-[500px] md:h-[400px] w-full overflow-hidden relative"
		>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[20deg]">
				<div className="flex flex-col w-full gap-4">
					<Slide
						progress={scrollYProgress}
						left="-25%"
						images={[
							"/images/home-slider/1.webp",
							"/images/home-slider/11.webp",
							"/images/home-slider/3.webp",
							"/images/home-slider/10.webp",
						]}
						direction="left"
					/>
					<Slide
						progress={scrollYProgress}
						left="-5%"
						images={[
							"/images/home-slider/4.webp",
							"/images/home-slider/5.webp",
							"/images/home-slider/7.webp",
							"/images/home-slider/8.webp",
						]}
						direction="right"
					/>
					<Slide
						progress={scrollYProgress}
						left="-35%"
						images={[
							"/images/home-slider/2.webp",
							"/images/home-slider/11.webp",
							"/images/home-slider/9.webp",
							"/images/home-slider/4.webp",
						]}
						direction="left"
					/>
					<Slide
						progress={scrollYProgress}
						left="-5%"
						images={[
							"/images/home-slider/3.webp",
							"/images/home-slider/8.webp",
							"/images/home-slider/10.webp",
							"/images/home-slider/6.webp",
						]}
						direction="right"
					/>
				</div>
			</div>
		</div>
	);
};

const Slide = (props: {
	images: string[];
	direction: "left" | "right";
	left: string;
	progress: MotionValue<number>;
}) => {
	const direction = props.direction == "left" ? -1 : 1;
	const translateX = useTransform(
		props.progress,
		[0, 1],
		[150 * direction, -150 * direction]
	);
	return (
		<motion.div
			style={{ x: translateX, left: props.left }}
			className="relative flex whitespace-nowrap gap-4"
		>
			{props.images.map(item => (
				<SlideImage
					key={item}
					item={item}
				/>
			))}
			{props.images.map(item => (
				<SlideImage
					key={item}
					item={item}
				/>
			))}
		</motion.div>
	);
};

const SlideImage = ({ item }: { item: string }) => {
	return (
		<div className="lg:h-[350px] lg:w-[700px] md:[h-235px] md:w-[470px] h-[200px] w-[400px] relative">
			<Image
				src={item}
				fill
				className="object-cover"
				alt="Temurbek Avazov"
			/>
		</div>
	);
};

export default HomeParallax;
