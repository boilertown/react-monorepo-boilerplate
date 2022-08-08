import { Container } from '@boilertowns-example/ui';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Counter } from 'components/Counter';
import { HomeWelcome } from 'components/HomeWelcome';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Boilertowns</title>
				<meta name="description" content="React monorepo by Boilertowns" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Container>
					<HomeWelcome />
					<Counter />
				</Container>
			</main>
		</div>
	);
};

export default Home;
