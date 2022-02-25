
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "./HomeScreen";

export type HomeStackType = {
	HomeScreen: undefined;
}

const Stack = createStackNavigator<HomeStackType>();

export const HomeStack = () => (
	<Stack.Navigator screenOptions={ {
		headerShown: false
	} }>
		<Stack.Screen name="HomeScreen" component={ HomeScreen }/>
	</Stack.Navigator>
);
