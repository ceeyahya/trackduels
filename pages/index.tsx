import { NavMenu } from 'components/NavMenu';
import { prisma } from 'db';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Tracks } from 'types/Track';

function Home() {
	return (
		<div className='space-y-8 px-4 py-4 sm:py-8'>
			<NavMenu />
			<div className='fixed inset-0 mx-auto flex h-screen max-w-2xl flex-col justify-center'>
				<div className='space-y-8 self-center px-4'>
					<div className='space-y-2'>
						<h1 className='max-w-2xl font-serif text-2xl leading-normal sm:text-3xl'>
							What is the best song on my playlist ?
						</h1>
						<p className='max-w-lg text-sm text-gray-500 dark:text-zinc-500 sm:text-base'>
							The app will present you with 2 random songs pulled from my{' '}
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='text-indigo-500 underline underline-offset-2 dark:text-indigo-500'
								href='https://open.spotify.com/playlist/6rnNiTWsUxMFUFe2q8JOkp?si=79203836ee6a41e5'>
								playlist
							</a>{' '}
							and you can vote for your favorite out of the 2 by double clicking
							on it.
						</p>
						<p className='max-w-lg text-sm text-gray-500 dark:text-zinc-500 sm:text-base'>
							You can see what songs people like the most by checking out the
							Leaderboard page.
						</p>
					</div>
					<div className='flex items-center space-x-2'>
						<Link
							className='inline-block rounded-md bg-indigo-500 px-2 py-2 text-sm text-white transition duration-300 hover:bg-indigo-600 sm:px-4 sm:py-2 sm:text-base'
							href='/vote'>
							Get Started !
						</Link>
						<Link
							className='inline-block rounded-md bg-indigo-100 px-2 py-2 text-sm text-indigo-600 transition duration-300 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-100 dark:hover:bg-indigo-800 sm:px-4 sm:py-2 sm:text-base'
							href='/vote'>
							Leaderboard
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
