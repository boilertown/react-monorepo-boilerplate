import { Container } from '@boilertowns-example/ui';
import { Counter } from '@components/Counter';
import { HomeWelcome } from '@components/HomeWelcome';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Boilertowns</title>
				<meta name="description" content="React monorepo by Boilertowns" />
				<link
					rel="shortcut icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>♨️</text></svg>"
				/>
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
