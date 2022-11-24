import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { classNames } from 'utils/classNames';

export function NavMenu() {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<div className='absolute top-4 right-4 z-50'>
			{mounted ? (
				<Menu as='div' className='relative inline-block text-left'>
					<div>
						<Menu.Button className='flex items-center rounded-md bg-gray-100 px-2 py-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-zinc-700 dark:text-zinc-200 dark:ring-offset-zinc-700'>
							<span className='sr-only'>Open options</span>
							<svg
								className='h-6 w-6'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'>
								<path fill='none' d='M0 0h24v24H0z' />
								<path
									d='M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z'
									fill='currentColor'
								/>
							</svg>
						</Menu.Button>
					</div>

					<Transition
						as={Fragment}
						enter='transition ease-out duration-100'
						enterFrom='transform opacity-0 scale-95'
						enterTo='transform opacity-100 scale-100'
						leave='transition ease-in duration-75'
						leaveFrom='transform opacity-100 scale-100'
						leaveTo='transform opacity-0 scale-95'>
						<Menu.Items className='absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-700'>
							<div className='py-1'>
								<Menu.Item>
									{({ active }) => (
										<Link
											href='/'
											className={classNames(
												active
													? 'bg-gray-100 text-gray-900 dark:bg-zinc-600 dark:text-zinc-100'
													: 'text-gray-700 dark:text-zinc-400',
												'block px-4 py-2 text-sm'
											)}>
											Home
										</Link>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<Link
											href='/leaderboard'
											className={classNames(
												active
													? 'bg-gray-100 text-gray-900 dark:bg-zinc-600 dark:text-zinc-100'
													: 'text-gray-700 dark:text-zinc-400',
												'block px-4 py-2 text-sm'
											)}>
											Leaderboard
										</Link>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<Link
											href='/vote'
											className={classNames(
												active
													? 'bg-gray-100 text-gray-900 dark:bg-zinc-600 dark:text-zinc-100'
													: 'text-gray-700 dark:text-zinc-400',
												'block px-4 py-2 text-sm'
											)}>
											Vote
										</Link>
									)}
								</Menu.Item>

								{theme === 'dark' ? (
									<Menu.Item>
										{({ active }) => (
											<button
												onClick={() => setTheme('light')}
												className={classNames(
													active
														? 'bg-gray-100 text-gray-900 dark:bg-zinc-600 dark:text-zinc-100'
														: 'text-gray-700 dark:text-zinc-400',
													'block w-full px-4 py-2 text-left text-sm'
												)}>
												Light Mode
											</button>
										)}
									</Menu.Item>
								) : (
									<Menu.Item>
										{({ active }) => (
											<button
												onClick={() => setTheme('dark')}
												className={classNames(
													active
														? 'bg-gray-100 text-gray-900 dark:bg-zinc-600 dark:text-zinc-100'
														: 'text-gray-700 dark:text-zinc-400',
													'block w-full px-4 py-2 text-left text-sm'
												)}>
												Dark Mode
											</button>
										)}
									</Menu.Item>
								)}
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			) : null}
		</div>
	);
}
