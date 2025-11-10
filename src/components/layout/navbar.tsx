'use client';
import {
	motion,
	useScroll,
	useMotionValueEvent,
	AnimatePresence,
} from 'framer-motion';
import React, { useState } from 'react';

import { NAV_LINKS } from '@/constants/global';
import { cn } from '@/lib/utils/cn';
import NavbarLink from '../ui/nav-link';
import Link from 'next/link';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [visible, setVisible] = useState(true);
	const { scrollYProgress } = useScroll();
	useMotionValueEvent(scrollYProgress, 'change', current => {
		// Check if current is not undefined and is a number
		if (typeof current === 'number') {
			let direction = current! - scrollYProgress.getPrevious()!;

			if (scrollYProgress.get() < 0.05) {
				setVisible(true);
			} else {
				if (direction < 0) {
					setVisible(true);
				} else {
					setVisible(false);
				}
			}
		}
	});

	return (
		<AnimatePresence mode='wait'>
			<motion.header
				initial={{
					opacity: 1,
					y: 0,
				}}
				animate={{
					y: visible ? 0 : -100,
				}}
				transition={{
					duration: 0.3,
				}}
				className='fixed top-5 left-0 ring-0 mx-auto z-10 flex items-center flex-col justify-center px-6 transition-all duration-200 w-full'
			>
				<div className=' border border-white/10 rounded-lg bg-white/10 backdrop-blur-[200px] py-3 flex items-center w-full max-w-[760px] justify-between px-6'>
					<Link
						href='/'
						className='text-white'
					>
						SHOAZIZOV
					</Link>
					<nav className='md:flex hidden items-center gap-6'>
						{NAV_LINKS.map(item => (
							<NavbarLink
								key={item.link + 'comp'}
								{...item}
							></NavbarLink>
						))}
					</nav>
					<span className='text-white/60 text-sm md:block hidden'>
						Tashkent
					</span>
					<button
						aria-label='Plus icon'
						onClick={() => setOpen(!open)}
						type='button'
						className='md:hidden h-8 w-8 flex items-center justify-center rounded border border-white/10'
					>
						<span
							className={cn('transition-all duration-200 ease-in-out', {
								'rotate-45': open,
							})}
						>
							<PlusSignIcon />
						</span>
					</button>
				</div>
				{open && (
					<div className='md:hidden border mt-4 border-white/10 rounded-lg bg-white/10 backdrop-blur-[200px] w-full max-w-[760px] px-4 py-6 animate-mobile-menu'>
						<div className='flex flex-col items-start gap-6'>
							{NAV_LINKS.map(item => (
								<NavbarLink
									key={item.link + 'mob'}
									{...item}
								></NavbarLink>
							))}
						</div>
					</div>
				)}
			</motion.header>
		</AnimatePresence>
	);
};

const PlusSignIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={20}
		height={20}
		color={'#fff'}
		fill={'none'}
		{...props}
	>
		<path
			d='M12 4V20M20 12H4'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export default Navbar;
