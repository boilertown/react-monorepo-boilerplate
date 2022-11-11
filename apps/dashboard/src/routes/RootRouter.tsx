import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
// --- routes ---
import { NotFoundPage } from 'pages/404';
import { HomePage } from 'pages/home';
import { LoginPage } from 'pages/login';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		// When no routes matches, show 404 page.
		path: '*',
		element: <NotFoundPage />,
	},
];

export const RootRouter = () => {
	const element = useRoutes(routes);
	return element;
};
