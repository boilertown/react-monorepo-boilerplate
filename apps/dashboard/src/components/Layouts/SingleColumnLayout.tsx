import * as Sc from './SingleColumnLayout.styled';

interface SingleColumnLayoutProps {
	renderHeader: React.ReactNode;
	renderMain: React.ReactNode;
	renderFooter: React.ReactNode;
}

/**
 * A traditional layout with a header, main content and footer in a single column.
 */
export const SingleColumnLayout = (props: SingleColumnLayoutProps) => {
	return (
		<>
			<header>{props.renderHeader}</header>
			<main>
				<Sc.Container>{props.renderMain}</Sc.Container>
			</main>
			<footer>{props.renderFooter}</footer>
		</>
	);
};
