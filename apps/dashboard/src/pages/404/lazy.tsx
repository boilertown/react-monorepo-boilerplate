import { lazy, Suspense } from 'react';
import { PageFallback } from 'components/SuspenseFallback';

const Component = lazy(
	() => import('./NotFoundPage' /* webpackChunkName: '404' */),
);

export const NotFoundPage = (props) => {
	return (
		<Suspense fallback={<PageFallback />}>
			<Component {...props} />
		</Suspense>
	);
};
