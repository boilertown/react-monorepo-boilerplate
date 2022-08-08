import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { App, BrowserRouter, history } from './root-providers';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);

root.render(
	<HelmetProvider>
		<BrowserRouter history={history}>
			<StrictMode>
				<App />
			</StrictMode>
		</BrowserRouter>
	</HelmetProvider>,
);
