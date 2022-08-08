import Image from 'next/image';
import styles from './HomeWelcome.module.css';
import launch_img from 'assets/images/launch.png';

export const HomeWelcome = () => {
	return (
		<>
			<figure className={styles.figure}>
				<Image src={launch_img} alt="A rocket is being launched" />
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
