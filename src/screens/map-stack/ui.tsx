import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MapScreen } from "../map";

export type MapStackType = {
	Map: undefined;
}

const Stack = createStackNavigator<MapStackType>();

export const MapStack = () => (
	<Stack.Navigator>
		<Stack.Screen name="Map" component={ MapScreen }/>
	</Stack.Navigator>
);
