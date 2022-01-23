import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";

import { HomeScreen } from "../../screens/Home/ui";
import { HomeIcon } from "../../shared/ui";
import { ExploreIcon } from "../../shared/ui/Icons/ExploreIcon/ui";

function SettingsScreen () {
	return (
		<View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
			<Text>Explore!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export const TabNavigation = () => (

	<Tab.Navigator initialRouteName="Home" screenOptions={ {
		tabBarStyle: { backgroundColor: "#0D0B26" },
		headerShown: false,
	} }>
		<Tab.Screen
			name="Home"
			component={ HomeScreen }
			options={ { tabBarIcon: ({ focused }) => (
				<HomeIcon focused={ focused }/>
			),
			tabBarLabel: ({ focused }) => <Label focused={ focused }>Home</Label>,
			header: () => null
			} }

		/>
		<Tab.Screen
			name="Settings"
			component={ SettingsScreen }
			options={ { tabBarIcon: ({ focused }) => (
				<ExploreIcon focused={ focused }/>
			),
			tabBarLabel: ({ focused }) => <Label focused={ focused }>Explore</Label>,
			header: () => null
			} } />
	</Tab.Navigator>
);

const Label = styled.Text<{focused: boolean}>`
	font-weight: 600;
	font-size: 10px;
	color: ${({ focused }) => focused ? "#B9C2CD" : "#7E848B"};
`;
