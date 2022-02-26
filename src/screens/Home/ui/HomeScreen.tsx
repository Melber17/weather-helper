import * as React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { CustomStatusBar } from "../../../shared/ui";

export const HomeScreen: React.FC = () => {

	return (
		<View style={ { flex: 1 } }>
			<CustomStatusBar />
			<View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
				<Text >Home</Text>
			</View>
		</View>
	);
};

const Text = styled.Text`
	font-size: 18px;
	color: #fff;
	font-family: Roboto-Medium;
	`;
