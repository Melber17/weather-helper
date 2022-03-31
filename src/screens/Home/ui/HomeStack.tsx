
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./HomeScreen";

export type HomeStackType = {
	HomeScreen: undefined;
}

const Stack = createNativeStackNavigator<HomeStackType>();

export const HomeStack = () => (
	<Stack.Navigator screenOptions={ {
		headerShown: false,
	} }>
		<Stack.Screen name="HomeScreen" component={ HomeScreen }/>
	</Stack.Navigator>
);
