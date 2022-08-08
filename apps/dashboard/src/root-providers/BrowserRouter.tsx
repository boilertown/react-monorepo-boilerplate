import { createBrowserHistory, History } from 'history';
import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

export const history = createBrowserHistory({ window });

interface BrowserRouterProps {
	basename?: string;
	children?: React.ReactNode;
	history: History;
}

/**
 * A `<Router>` that accepts a pre-instantiated history object. We do this when some components
 * needs to access router navigator from outside the Router Context.
 *
 * React Router has provided [unstable_HistoryRouter](https://reactrouter.com/docs/en/v6/routers/history-router)
 * to solve the problem.
 *
 * @see https://reactrouter.com/docs/en/v6/routers/history-router
 * @see https://github.com/remix-run/react-router/issues/8264
 * @see https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/index.tsx#L222
 */
export const BrowserRouter = ({
	basename,
	children,
	history,
}: BrowserRouterProps) => {
	const [state, setState] = useState({
		action: history.action,
		location: history.location,
	});

	useLayoutEffect(() => history.listen(setState), [history]);

	return (
		<Router
			basename={basename}
			// eslint-disable-next-line react/no-children-prop
			children={children}
			location={state.location}
			navigationType={state.action}
			navigator={history}
		/>
	);
};
