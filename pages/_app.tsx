import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<ThemeProvider enableSystem={true} attribute='class' defaultTheme='light'>
				<Component {...pageProps} />
			</ThemeProvider>
		</div>
	);
}

export default MyApp;
