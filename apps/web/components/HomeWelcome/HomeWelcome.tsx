import Image from 'next/image';
import styles from './HomeWelcome.module.css';

export const HomeWelcome = () => {
	return (
		<>
			<figure className={styles.figure}>
				<Image
					src="/launch.png"
					alt="A rocket is being launched"
					width={200}
					height={200}
				/>
				<figcaption className={styles.figcaption}>
					Illustration by{' '}
					<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
						Icons 8
					</a>
				</figcaption>
			</figure>
			<h1 className={styles.heading}>Welcome to Boilertowns</h1>
		</>
	);
};
