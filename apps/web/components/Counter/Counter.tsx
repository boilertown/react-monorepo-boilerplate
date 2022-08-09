import { Button } from '@boilertowns-example/ui';
import { useState } from 'react';
import styles from './Counter.module.css';

export const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className={styles.wrap}>
			<Button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Count: <strong>{count}</strong>
			</Button>
		</div>
	);
};
