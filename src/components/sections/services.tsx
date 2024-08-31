import React from "react";
import Container from "../ui/container";
import Heading from "../ui/heading";
import ServiceCard from "../ui/services-card";

const Services = () => {
	return (
		<section className="py-20 md:py-28">
			<Container>
				<Heading
					variant="h2"
					className="block max-w-2xl"
				>
					From concept to completion, I create spaces that reflect your unique
					style and goals.
				</Heading>
				<div className="grid md:grid-cols-3 gap-6 md:mt-20 mt-14">
					{SERVICES.map(service => (
						<ServiceCard
							key={service.title}
							{...service}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

const SERVICES = [
	{
		title: "Interior Design",
		text: "Create stunning and functional interior spaces tailored to your unique style and needs.",
	},
	{
		title: "Exterior Design",
		text: "Transform your outdoor areas into beautiful and inviting spaces with expert landscape and hardscape design.",
	},
	{
		title: "Photorealistic Rendering",
		text: "Bring your design visions to life with high-quality, photorealistic renderings that provide a clear and compelling visualization of your project.",
	},
];

export default Services;
