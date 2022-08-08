import { SingleColumnLayout } from 'components/Layouts';
import { Typography } from 'components/Typography';

const NotFoundPage = () => {
	return (
		<SingleColumnLayout
			renderHeader={null}
			renderMain={<Typography.Title>404 - Not found</Typography.Title>}
			renderFooter={null}
		/>
	);
};

export default NotFoundPage;
