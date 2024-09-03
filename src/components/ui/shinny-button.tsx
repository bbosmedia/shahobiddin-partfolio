"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

const ShinnyButton = ({
	link,
	children,
	type,
}: PropsWithChildren<{
	link?: string;
	type?: "button" | "submit" | "reset" | undefined;
}>) => {
	const router = useRouter();
	return (
		<motion.button
			initial={{ "--x": "100%" } as any}
			animate={{ "--x": "-100%" } as any}
			whileTap={{ scale: 0.95 }}
			transition={{
				repeat: Infinity,
				repeatType: "loop",
				repeatDelay: 1,
				type: "spring",
				stiffness: 20,
				damping: 15,
				mass: 2,
				scale: {
					type: "spring",
					stiffness: 10,
					damping: 5,
					mass: 0.1,
				},
			}}
			className="px-8 py-3 rounded-md relative radial-gradient group w-max"
			onClick={() => {
				if (link) {
					router.push(link);
				}
			}}
			type={type}
		>
			<span className="text-neutral-100 group-hover:text-white tracking-wide font-light h-full w-full block relative linear-mask">
				{children}
			</span>
			<span className="absolute block inset-0 rounded-md p-px linear-overlay"></span>
		</motion.button>
	);
};

export default ShinnyButton;
