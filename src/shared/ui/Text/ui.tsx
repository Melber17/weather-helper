
import React, { FC } from "react";
import { TextProps as AdditionalTextProps } from "react-native";
import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";

import { Fonts, FontStyles } from "../../config";

interface IProps extends AdditionalTextProps {
	children: React.ReactNode;
	size?: number;
	color?: string;
	fontStyle?: FontStyles;
	font?: Fonts;
	style?: object;
}

interface TextProps {
	size?: number;
	color?: string;
	fontStyle?: string;
	font?: string;
}

export const Text: FC<IProps> = (props) => {
	const { size, color, fontStyle, font, children, style } = props;

	return <Wrapper { ...{ size, color, fontStyle, font, style } }>{children}</Wrapper>;
};

const Wrapper = styled.Text<TextProps>`
  font-family: ${({ font = Fonts.ROBOTO, fontStyle = FontStyles.REGULAR }) =>
		`${font}-${fontStyle}`};
  font-size: ${({ size = 14 }) => moderateScale(size)}px;
	color: ${({ color = "#ffffff" }) => color};
`;
