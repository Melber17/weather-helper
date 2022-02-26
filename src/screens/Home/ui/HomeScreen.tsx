import * as React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { useAppSelector } from "../../../shared/lib/useRedux";

export const HomeScreen: React.FC = () => {
	const store = useAppSelector(globalStore => globalStore);

	console.log("store =>", store);

	return (
		<View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
			<Text>Home!</Text>
		</View>
	);
};

const Text = styled.Text`
	font-size: 18px;
`;
