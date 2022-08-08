import { SingleColumnLayout } from 'components/Layouts';
import { Typography } from 'components/Typography';

const HomePage = () => {
	return (
		<SingleColumnLayout
			renderHeader={null}
			renderMain={<Typography.Title>Login</Typography.Title>}
			renderFooter={null}
		/>
	);
};

export default HomePage;
