import styled from '@emotion/styled';
import { getTextStyles } from './getStyles';
import type { TypographyCommonProps } from './Typography';
import type { TypographyTitleProps } from './TypographyTitle';

export const Heading = styled.div<TypographyTitleProps>`
	margin: 0;
	font-weight: ${(props) => props.weight};
	text-align: ${(props) => props.align};
	${(props) => getTextStyles(props.size)};
`;

export const FlowContent = styled.div<TypographyCommonProps>`
	margin: 0;
	padding: 0;
	font-weight: ${(props) => props.weight};
	text-align: ${(props) => props.align};
	${(props) => getTextStyles(props.size)};
`;
