import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MapScreen } from "./MapScreen";

export type MapStackType = {
	MapScreen: undefined;
}

const Stack = createStackNavigator<MapStackType>();

export const MapStack = () => (
	<Stack.Navigator screenOptions={ {
		headerShown: false
	} }>
		<Stack.Screen name="MapScreen" component={ MapScreen }/>
	</Stack.Navigator>
);
