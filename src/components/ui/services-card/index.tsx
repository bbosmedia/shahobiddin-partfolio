"use client";
import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils/cn";

const ServiceCard = ({ text, title }: { text: string; title: string }) => {
	const [hovered, setHovered] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const elementRef = useRef<HTMLDivElement>(null);

	const onMouseEnter = () => setHovered(true);
	const onMouseLeave = () => setHovered(false);
	const onMouseMove = (event: any) => {
		if (elementRef.current && event.clientX) {
			const mouseX =
				event.clientX - elementRef.current.getBoundingClientRect().left;
			const mouseY =
				event.clientY - elementRef.current.getBoundingClientRect().top;
			setPosition({ x: mouseX, y: mouseY });
		}
	};

	return (
		<div className={cn(styles.serviceCard, styles.dark)}>
			<div className={styles.serviceCardBorder}></div>

			<div
				ref={elementRef}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onMouseMove={onMouseMove}
				className="p-6 bg-black h-full relative rounded-lg cursor-default"
			>
				{hovered && (
					<div
						className={styles.serviceCardSphere}
						style={{
							top: `${position.y - 35}px`,
							left: `${position.x - 35}px`,
						}}
					></div>
				)}
				<div className="relative">
					<span className=" md:text-2xl text-xl leading-6 text-white py-[10px]">
						{title}
					</span>
					<p className="text-white/40 text-sm md:text-lg font-light block mt-4">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
