import { Button } from '@boilertowns-example/ui';
import { useNavigate } from 'react-router-dom';
import { SingleColumnLayout } from 'components/Layouts';
import { Typography } from 'components/Typography';

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<SingleColumnLayout
			renderHeader={null}
			renderMain={
				<>
					<Typography.Title>Home</Typography.Title>
					<div>
						<Button onClick={() => navigate('/login')}>Login</Button>
					</div>
				</>
			}
			renderFooter={null}
		/>
	);
};

export default HomePage;
