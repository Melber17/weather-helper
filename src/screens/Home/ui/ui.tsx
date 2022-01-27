import * as React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export const HomeScreen: React.FC = () => (
	<View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
		<Text>Home!</Text>
	</View>
);

const Text = styled.Text`
	font-size: 18px;
`;
