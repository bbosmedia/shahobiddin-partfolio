"use client";
import { cn } from "@/lib/utils/cn";
import React, { InputHTMLAttributes } from "react";

interface TextControllerProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: boolean;
}

const TextController = ({
	label,
	name,
	id,
	value,
	className,
	error,
	...props
}: TextControllerProps) => {
	return (
		<div className="relative group">
			<span className="opacity-0">
				<label htmlFor={name}>{label}</label>
			</span>
			<span
				className={cn(
					"text-neutral-100 absolute top-8 left-0 font-light group-focus-within:top-0 group-focus-within:text-neutral-700 transition-all duration-200 ease-linear",
					{
						"top-0 text-neutral-700": value && value.toString().length > 0,
					}
				)}
			>
				{label}
			</span>
			<input
				id={name}
				name={name}
				value={value}
				className={cn(
					"bg-transparent relative pb-3 pt-2 outline-none font-light text-white  border-b   border-b-[#1E1E1E] w-full focus:border-b-neutral-400 transition-all duration-200 ease-linear",
					{
						"border-b-red-700 focus:border-b-neutral-400": error,
					}
				)}
				{...props}
			/>
		</div>
	);
};

export default TextController;
