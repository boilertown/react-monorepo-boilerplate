import { css } from '@emotion/react';
import type { TypographySize } from './Typography';

const Standard = css`
	font-size: 16px;
	line-height: 24px;
`;

const Medium = css`
	font-size: 21px;
	line-height: 28px;
`;

const Big = css`
	font-size: 48px;
	line-height: 44px;
`;

export const getTextStyles = (type?: TypographySize) => {
	switch (type) {
		case 'medium':
			return Medium;
		case 'big':
			return Big;
		case 'standard':
		default:
			return Standard;
	}
};
