import { classNames } from 'helpers/classNames';
import type { TypographyCommonProps } from './Typography';
import * as Sc from './Typography.styled';

export type TypographyTitleProps = TypographyCommonProps &
	React.HTMLAttributes<HTMLHeadingElement> & {
		level?: 1 | 2 | 3 | 4 | 5 | 6;
	};

export const TypographyTitle = ({
	level = 1,
	size = 'big',
	weight = 'normal',
	align = 'initial',
	className,
	children,
	...rest
}: TypographyTitleProps): JSX.Element => {
	const asElement = level ? (`h${level}` as React.ElementType) : 'h1';
	return (
		<Sc.Heading
			as={asElement}
			className={classNames('TypographyTitle-root', className)}
			size={size}
			weight={weight}
			align={align}
			{...rest}
		>
			{children}
		</Sc.Heading>
	);
};
