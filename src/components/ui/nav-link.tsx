import { cn } from "@/lib/utils/cn";
import Link from "next/link";

export interface NavLinkProp {
	name: string;
	link: string;
	className?: string;
}

const NavbarLink = ({ name, link, className }: NavLinkProp) => {
	return (
		<Link
			className={cn(
				"relative text-sm group overflow-hidden text-white/50 hover:text-white transition-all duration-200 ease-in-out font-light",
				className
			)}
			href={link}
		>
			<span className="opacity-0">{name}</span>
			<span className="absolute top-0 left-0 group-hover:-top-full transition-all duration-200 ease-in-out">
				{name}
			</span>
			<span className="absolute top-full left-0 group-hover:top-0 transition-all duration-200 ease-in-out">
				{name}
			</span>
		</Link>
	);
};

export default NavbarLink;
