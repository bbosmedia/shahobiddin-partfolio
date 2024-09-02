import React from "react";
import { motion } from "framer-motion";

interface HoverImageProps {
	src: string;
	alt: string;
}

const HoverImage: React.FC<HoverImageProps> = ({ src, alt }) => {
	const [hoverDirection, setHoverDirection] = React.useState<
		"top" | "bottom" | "left" | "right" | null
	>(null);
	const [isHovered, setIsHovered] = React.useState(false);

	const detectDirection = (e: React.MouseEvent, element: HTMLElement) => {
		const width = element.offsetWidth;
		const height = element.offsetHeight;
		const x =
			e.pageX -
			element.offsetLeft -
			(width / 2) * (width > height ? height / width : 1);
		const y =
			e.pageY -
			element.offsetTop -
			(height / 2) * (height > width ? width / height : 1);
		const direction = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

		switch (direction) {
			case 0:
				return "top";
			case 1:
				return "right";
			case 2:
				return "bottom";
			case 3:
				return "left";
			default:
				return "top";
		}
	};

	const handleMouseEnter = (e: React.MouseEvent) => {
		const direction = detectDirection(e, e.currentTarget as HTMLElement);
		setHoverDirection(direction);
		setIsHovered(true);
	};

	const handleMouseLeave = (e: React.MouseEvent) => {
		const direction = detectDirection(e, e.currentTarget as HTMLElement);
		setHoverDirection(direction);
		setIsHovered(false);
	};

	return (
		<div
			className="relative overflow-hidden w-64 h-64"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img
				src={src}
				alt={alt}
				className="w-full h-full object-cover"
			/>

			{isHovered && (
				<motion.div
					initial={{
						opacity: 0,
						x:
							hoverDirection === "left"
								? "-100%"
								: hoverDirection === "right"
								? "100%"
								: 0,
						y:
							hoverDirection === "top"
								? "-100%"
								: hoverDirection === "bottom"
								? "100%"
								: 0,
					}}
					animate={{ opacity: 1, x: 0, y: 0 }}
					exit={{
						opacity: 0,
						x:
							hoverDirection === "left"
								? "-100%"
								: hoverDirection === "right"
								? "100%"
								: 0,
						y:
							hoverDirection === "top"
								? "-100%"
								: hoverDirection === "bottom"
								? "100%"
								: 0,
					}}
					transition={{ duration: 0.3 }}
					className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
				>
					<p className="text-white text-xl">{alt}</p>
				</motion.div>
			)}
		</div>
	);
};

export default HoverImage;
