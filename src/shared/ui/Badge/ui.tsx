import * as React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import styled from "styled-components/native";

import { FontStyles } from "../../config";
import { Text } from "../Text";

interface IProps {
	backgroundColor: string;
	icon: React.ReactElement;
	color: string;
}

export const Badge: React.FC<IProps> = (props) => {
	const { children, backgroundColor, icon, color } = props;

	return (
		<Wrapper backgroundColor={ backgroundColor }>
			{icon}<Text size={ 14 } color={ color } fontStyle={ FontStyles.BOLD } style={ { marginLeft: 3 } }>{children}</Text>
		</Wrapper>
	);
};

const Wrapper = styled.View<{backgroundColor: string}>`
  width: ${scale(90)}px;
  height: ${verticalScale(34)}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  flex-direction: row;
  justify-content:center;
  align-items: center;
  border-radius: 20px;
`;
