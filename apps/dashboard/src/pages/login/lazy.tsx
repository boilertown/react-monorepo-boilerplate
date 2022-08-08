import { lazy, Suspense } from 'react';
import { PageFallback } from 'components/SuspenseFallback';

const Component = lazy(
	() => import('./LoginPage' /* webpackChunkName: 'login' */),
);

export const LoginPage = (props) => {
	return (
		<Suspense fallback={<PageFallback />}>
			<Component {...props} />
		</Suspense>
	);
};
