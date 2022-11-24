import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useDoubleTap } from 'use-double-tap';
import { AnimatePresence, motion } from 'framer-motion';

import { prisma } from 'db';
import { NavMenu } from 'components/NavMenu';
import { generateRandomNumbers } from 'utils/generateRandomNumbers';
import { Tracks } from 'types/Track';
import { TrackComponent } from 'components/TrackComponent';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Vote({ tracks }: { tracks: Tracks }) {
	const router = useRouter();
	const [triggerTrackOne, setTriggerTrackOne] = useState(false);
	const [triggerTrackTwo, setTriggerTrackTwo] = useState(false);

	const firstTrackBind = useDoubleTap(async (event) => {
		setTriggerTrackOne(true);
		setTimeout(() => {
			setTriggerTrackOne(false);
			router.reload();
		}, 500);
		await fetch(`/api/track/update`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: tracks[0].id }),
		});
	}, 250);

	const secondTrackBind = useDoubleTap(async (event) => {
		setTriggerTrackTwo(true);
		setTimeout(() => {
			setTriggerTrackTwo(false);
			router.reload();
		}, 500);
		await fetch(`/api/track/update`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: tracks[1].id }),
		});
	}, 250);

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavMenu />
			<main className='grid h-screen grid-cols-1 sm:grid-cols-2'>
				<button
					{...firstTrackBind}
					className={`group relative flex h-full w-full items-center justify-center transition duration-300 hover:bg-gray-200 dark:hover:bg-zinc-800 `}>
					<div className={triggerTrackOne ? 'opacity-20' : 'opacity-100'}>
						<TrackComponent data={tracks[0]} />
					</div>
					<AnimatePresence>
						{triggerTrackOne ? (
							<motion.div
								key='like'
								className='fixed z-50 sm:mb-12'
								initial={{ visibility: 'hidden', opacity: 0 }}
								animate={{ opacity: 1, scale: 1.4, visibility: 'visible' }}
								exit={{ opacity: 0, scale: 1.4 }}>
								<svg
									className='h-32 w-32 text-red-600 opacity-100 sm:h-44 sm:w-44'
									viewBox='0 0 24 24'>
									<path
										fill='currentColor'
										d='M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z'></path>
								</svg>
							</motion.div>
						) : null}
					</AnimatePresence>
				</button>
				<button
					{...secondTrackBind}
					className={`group relative flex h-full w-full items-center justify-center border-t border-gray-300 transition duration-300 hover:bg-gray-200 dark:border-zinc-600 dark:hover:bg-zinc-800 sm:border-l`}>
					<div className={triggerTrackTwo ? 'opacity-20' : 'opacity-100'}>
						<TrackComponent data={tracks[1]} />
					</div>
					<AnimatePresence>
						{triggerTrackTwo ? (
							<motion.div
								key='like'
								className='fixed z-50 sm:mb-12'
								initial={{ visibility: 'hidden', opacity: 0 }}
								animate={{ opacity: 1, scale: 1.4, visibility: 'visible' }}
								exit={{ opacity: 0, scale: 1.4 }}>
								<svg
									className='h-32 w-32 text-red-600 opacity-100 sm:h-44 sm:w-44'
									viewBox='0 0 24 24'>
									<path
										fill='currentColor'
										d='M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z'></path>
								</svg>
							</motion.div>
						) : null}
					</AnimatePresence>
				</button>
			</main>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const tracksCount = await prisma.track.count();
	const randomIds = generateRandomNumbers(1, tracksCount, 2);

	const firstTrack = await prisma.track.findUnique({
		where: {
			id: randomIds[0],
		},
	});

	const secondTrack = await prisma.track.findUnique({
		where: {
			id: randomIds[1],
		},
	});

	return {
		props: {
			tracks: [firstTrack, secondTrack],
		},
	};
};

export default Vote;