import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

export const RootRouter = () => {
	const element = useRoutes(routes);
	return element;
};
