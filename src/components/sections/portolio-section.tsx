import React from "react";
import Heading from "../ui/heading";
import Container from "../ui/container";
import ParallaxImage from "../ui/parallax-image";
import data from "@/data/porfolio.json";

const PortfolioSection = () => {
	return (
		<section>
			
			<div className="-space-y-10">
				{data.map((image, index) => (
					<ParallaxImage
						key={index}
						src={image.preview}
						alt={image.title}
						link={`/portfolio/${image.id}`}
					/>
				))}
			</div>
		</section>
	);
};

export default PortfolioSection;
