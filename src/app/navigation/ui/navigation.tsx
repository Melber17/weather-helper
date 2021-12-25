import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { TabNavigation } from "../../../widgets";

const Stack = createNativeStackNavigator();

export const Navigation: React.FC = () => (
	<Stack.Navigator initialRouteName="TabNavigation">
		<Stack.Screen name="TabNavigation" component={ TabNavigation } />
	</Stack.Navigator>

);
