import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import styled from "styled-components/native";

import { TabNavigation } from "../widgets/tab-navigation";

type RootStackListType = {
	TabNavigation: undefined;
}

const Stack = createNativeStackNavigator<RootStackListType>();

export const Routing: React.FC = () => (
	<Container>
		<Stack.Navigator
			initialRouteName="TabNavigation"
			screenOptions={ {
				headerShown: false
			} }>
			<Stack.Screen name="TabNavigation" component={ TabNavigation } />
		</Stack.Navigator>
	</Container>
);

const Container = styled.View`
  flex: 1;
  position: relative;
`;
