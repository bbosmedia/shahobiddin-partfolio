import { NAV_LINKS } from '@/constants/global';
import Link from 'next/link';
import React from 'react';
import NavbarLink from '../ui/nav-link';

const Footer = () => {
	return (
		<footer className='pb-[60px] md:pt-[120px] pt-14  bg-black relative'>
			<video
				className='object-cover h-full w-full absolute top-0 left-0'
				src='/videos/footer-video.mp4'
				autoPlay
				muted
				loop
			/>
			<div
				className='absolute top-0 left-0 w-full h-full'
				style={{
					background:
						'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
				}}
			></div>
			<div className='max-w-[1576px] px-6 mx-auto relative z-[2]'>
				<div className='flex justify-between border-b border-white/10 pb-6 mb-6 max-md:flex-col gap-10'>
					<div>
						<Link
							href='/'
							aria-label='Home'
							className='text-white uppercase text-xl font-bold'
						>
							SHOAZIZOV
						</Link>
						<span className='text-white/50 text-sm max-w-[400px] block mt-4'>
							Experienced interior and exterior designer offering personalized
							solutions. Create stunning spaces that reflect your unique style.
							Contact me today for a consultation.
						</span>
					</div>
					<div className='flex flex-col items-center gap-4 max-md:items-start'>
						{NAV_LINKS.map(item => (
						
								<NavbarLink key={item.link + 'footer'} {...item} />
							
						))}
					</div>
				</div>
				<div className='flex items-center justify-between gap-6 flex-col md:flex-row'>
					<p className='text-white/50 text-sm font-light max-md:text-center'>
						Copyright {new Date().getFullYear()} TIM. Site made by{' '}
						<Link
							target='_blank'
							href='https://abbos-portfolio.vercel.app/'
							className='font-semibold text-white'
						>
							Abbos Nurgulshanov
						</Link>
					</p>
					<ul className='flex items-center gap-6'>
						{FOOTER_LINKS.map(item => (
							<li key={item.href + 'footer'}>
								<Link
									className='text-sm font-light text-gray-500 dark:text-gray-400 hover:text-white transition-all duration-200 ease-linear'
									href={item.href}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

const FOOTER_LINKS = [
	{
		href: 'https://www.upwork.com/freelancers/~01511a379fdf491eb9',
		name: 'Upwork',
	},
	{
		href: 'https://www.instagram.com/shoazizovarchitects',
		name: 'Instagram',
	},
	{
		href: 'https://www.behance.net/shahobishoaziz',
		name: 'Behance',
	},
];

export default Footer;
