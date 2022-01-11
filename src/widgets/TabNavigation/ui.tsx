import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";

import { HomeScreen } from "../../screens/Home/ui";
import { HomeIcon } from "../../shared/ui";

function SettingsScreen () {
	return (
		<View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
			<Text>Settings!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export const TabNavigation = () => (

	<Tab.Navigator initialRouteName="Home" screenOptions={ {
		tabBarStyle: { backgroundColor: "#0D0B26" },
	} }>
		<Tab.Screen
			name="Home"
			component={ HomeScreen }
			options={ { tabBarIcon: ({ focused }) => (
				<HomeIcon focused={ focused }/>
			),
			tabBarLabel: ({ focused }) => <Label focused={ focused }>Home</Label>,
			} }

		/>
		<Tab.Screen name="Settings" component={ SettingsScreen } />
	</Tab.Navigator>
);

const Label = styled.Text<{focused: boolean}>`
	font-weight: 400;
	font-size: 16px;
`;
