"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const GallerySection = () => {
	const images: string[] = [
		"/images/home-slider/1.webp",
		"/images/home-slider/2.webp",
		"/images/home-slider/3.webp",
		"/images/home-slider/4.webp",
		"/images/home-slider/5.webp",
		"/images/home-slider/6.webp",
		"/images/home-slider/7.webp",
		"/images/home-slider/8.webp",
		"/images/home-slider/9.webp",
		"/images/home-slider/10.webp",
		"/images/home-slider/11.webp",
	];
	const gallery = useRef<HTMLDivElement>(null);
	const [dimension, setDimension] = useState<{
		width: number;
		height: number;
	}>({ width: 0, height: 0 });

	const { scrollYProgress } = useScroll({
		target: gallery,
		offset: ["start end", "end start"],
	});
	const { height } = dimension;
	const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.1]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

	useEffect(() => {
		const resize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener("resize", resize);

		resize();

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);
	return (
		<section>
			<div
				ref={gallery}
				className={styles.gallery}
			>
				<Column
					images={[images[0], images[1], images[2]]}
					y={y}
				/>
				<Column
					images={[images[3], images[4], images[5]]}
					y={y2}
				/>
				<Column
					images={[images[6], images[7], images[8]]}
					y={y3}
				/>
				<Column
					images={[images[9], images[10], images[3]]}
					y={y4}
				/>
			</div>
		</section>
	);
};

export default GallerySection;

const Column = ({
	images,
	y,
}: {
	images: string[];
	y: MotionValue<number>;
}) => {
	return (
		<motion.div
			className={styles.column}
			style={{ y }}
		>
			{images.map((src, i) => {
				return (
					<div
						key={i}
						className={styles.imageContainer}
					>
						<Image
							src={src}
							alt="Shalhobiddin Shoazizov"
							fill
						/>
					</div>
				);
			})}
		</motion.div>
	);
};
