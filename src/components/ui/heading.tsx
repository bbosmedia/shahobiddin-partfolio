import { cn } from "@/lib/utils/cn";
import React, { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({ variant, className, children }: HeadingProps) => {
	if (variant === "h1") return <h1 className={cn("", className)}>{}</h1>;
	if (variant === "h2")
		return (
			<h2 className={cn("lg:text-4xl text-3xl text-white", className)}>
				{children}
			</h2>
		);
	return <h6 className={cn(className)}>{children}</h6>;
};

export default Heading;
