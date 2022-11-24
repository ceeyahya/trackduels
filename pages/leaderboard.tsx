import { NavMenu } from 'components/NavMenu';
import { prisma } from 'db';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Tracks } from 'types/Track';

function leaderboard({ tracks, count }: { tracks: Tracks; count: number }) {
	return (
		<div className='mx-auto max-w-7xl space-y-10 px-4 py-4 sm:py-8'>
			<NavMenu />
			<div className='space-y-2 sm:px-8'>
				<h1 className='max-w-2xl font-serif text-xl sm:text-3xl'>
					Out of {count} songs people liked these 10 the most.
				</h1>
			</div>
			<div className='grid grid-cols-1 gap-4 sm:gap-2 sm:gap-y-4 md:grid-cols-3 lg:grid-cols-5'>
				{tracks.map((t) => (
					<div key={t.id} className='mx-auto space-y-4'>
						<div className='relative'>
							<img
								className='h-44 w-44 rounded-md shadow-md shadow-gray-200 dark:shadow-zinc-800 sm:h-48 sm:w-48'
								src={t.cover}
								alt=''
							/>
							<div className='absolute top-2 left-2 rounded-md bg-white px-2 py-1'>
								<div className='flex items-center space-x-1'>
									<svg
										className='h-4 w-4 text-red-500'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'>
										<path fill='none' d='M0 0H24V24H0z' />
										<path
											d='M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z'
											fill='currentColor'
										/>
									</svg>
									<p className='text-sm dark:text-black'>{t.likes}</p>
								</div>
							</div>
						</div>
						<div className=''>
							<h1 className='w-48 truncate font-serif text-xl sm:text-3xl'>
								{t.name}
							</h1>
							<p className='text-sm text-gray-500 sm:text-base'>{t.artists}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const count = await prisma.track.count();
	const topTen = await prisma.track.findMany({
		take: 10,
		orderBy: {
			likes: 'desc',
		},
	});

	return {
		props: {
			count,
			tracks: topTen,
		},
	};
};

export default leaderboard;
