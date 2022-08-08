import { SingleColumnLayout } from 'components/Layouts';
import { Typography } from 'components/Typography';

export const PageFallback = () => {
	return (
		<SingleColumnLayout
			renderHeader={null}
			renderMain={<Typography.Paragraph>Loading...</Typography.Paragraph>}
			renderFooter={null}
		/>
	);
};
