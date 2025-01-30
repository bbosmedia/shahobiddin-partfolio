import Container from '@/components/ui/container';
import Heading from '@/components/ui/heading';
import React from 'react';
import data from '@/data/porfolio.json';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Services from '@/components/sections/services';
import HomeParallax from '@/components/sections/home-parallax';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const id = (await params).id;
	const post = data.find(item => item.id === id);

	if (!post) return notFound();
	return (
		<>
			<div>
				<Container className='md:pt-[160px] pt-[120px]'>
					<Heading
						variant='h2'
						className='text-white mb-10 block'
					>
						{post.title}
					</Heading>
					<div className='grid gap-3'>
						{post.images.map(image => (
							<Image
								key={image}
								className='w-full h-auto'
								src={image}
								alt='Shoazizov Architects'
								priority
								loading='lazy'
								height={2000}
								width={1600}
							/>
						))}
					</div>
				</Container>
			</div>
			<Services />
			<HomeParallax />
		</>
	);
};

export default Page;
