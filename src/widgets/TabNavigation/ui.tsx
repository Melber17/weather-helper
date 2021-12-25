import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../../screens";

function SettingsScreen () {
	return (
		<View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
			<Text>Settings!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export const TabNavigation = () => (

	<Tab.Navigator initialRouteName="Home">
		<Tab.Screen name="Home" component={ HomeScreen } />
		<Tab.Screen name="Settings" component={ SettingsScreen } />
	</Tab.Navigator>
);
