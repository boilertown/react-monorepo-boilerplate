import { classNames } from 'helpers/classNames';
import type { TypographyCommonProps } from './Typography';
import * as Sc from './Typography.styled';

export type TypographyParagraphProps = TypographyCommonProps &
	React.HTMLAttributes<HTMLParagraphElement>;

export const TypographyParagraph = ({
	size = 'standard',
	weight = 'normal',
	align = 'initial',
	className,
	children,
	...rest
}: TypographyParagraphProps): JSX.Element => {
	return (
		<Sc.FlowContent
			as="p"
			className={classNames('TypographyParagraph', className)}
			size={size}
			weight={weight}
			align={align}
			{...rest}
		>
			{children}
		</Sc.FlowContent>
	);
};
