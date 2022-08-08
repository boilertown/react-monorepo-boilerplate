import { lazy, Suspense } from 'react';
import { PageFallback } from 'components/SuspenseFallback';

const Component = lazy(
	() => import('./HomePage' /* webpackChunkName: 'home' */),
);

export const HomePage = (props) => {
	return (
		<Suspense fallback={<PageFallback />}>
			<Component {...props} />
		</Suspense>
	);
};
