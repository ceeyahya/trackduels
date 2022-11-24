import { Track } from 'types/Track';

export function TrackComponent({ data }: { data: Track }) {
	const { name, artists, cover, preview } = data;

	return (
		<div className='flex flex-col items-center space-y-4 self-center'>
			<img
				className='h-44 w-44 rounded-md shadow-md shadow-gray-200 transition duration-300 ease-out group-hover:scale-105 group-hover:shadow-lg dark:shadow-zinc-800 sm:h-72 sm:w-72 sm:group-hover:scale-110'
				src={cover}
				alt=''
			/>
			<div className='text-center transition duration-300 ease-out group-hover:translate-y-2 sm:space-y-1 sm:group-hover:translate-y-4'>
				<h1 className='font-serif text-lg tracking-tight sm:text-3xl'>
					{name}
				</h1>
				<p className='text-sm text-gray-400 dark:text-zinc-500 sm:text-base'>
					{artists}
				</p>
			</div>
			<div className='transition duration-300 ease-out group-hover:translate-y-2 sm:group-hover:translate-y-4'>
				{preview ? (
					<audio
						className='h-10 w-48 rounded-md bg-[#f1f3f5] dark:bg-[#373737]'
						controlsList='nodownload noremoteplayback nofullscreen'
						controls>
						<source src={preview} />
						This browser does not support audio elements.
					</audio>
				) : (
					<p className='mt-1 rounded-md bg-[#f1f3f5] px-4 py-2 text-sm text-gray-500 dark:bg-zinc-700 dark:text-zinc-400'>
						There is no preview for this song
					</p>
				)}
			</div>
		</div>
	);
}
