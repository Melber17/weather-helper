import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

import { HomeScreen } from "../../screens/home/ui";
import { HomeIcon, MapIcon, ExploreIcon, SettingsIcon } from "../../shared/ui";
import SearchButton from "../../assets/icons/search-button-icon.svg";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
	const config = {
		damping: 25,
		mass: 1,
		stiffness: 150,
		overshootClamping: false,
		restSpeedThreshold: 0.001,
		restDisplacementThreshold: 0.001,
	};
	const LINE_WIDTH = 78;
	const isFocusedSharedValue = useSharedValue(0);

	const handleTabListener = (index: number) => {
		isFocusedSharedValue.value = withSpring(LINE_WIDTH * index, config);
	};

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [{ translateX: isFocusedSharedValue.value }]
	}));

	return (
		<>
			<Tab.Navigator
				initialRouteName="Home"
				screenOptions={ {
					tabBarStyle: { backgroundColor: "#0D0B26" },
					headerShown: false,
				} }

			>
				<Tab.Screen
					name="Home"
					component={ HomeScreen }
					options={ {
						tabBarIcon: ({ focused }) => <HomeIcon focused={ focused } />,
						tabBarLabel: ({ focused }) => <Label focused={ focused }>Home</Label>,
					} }
					listeners={ () => ({
						tabPress: () => handleTabListener(0)
					}) }
				/>
				<Tab.Screen
					name="Explore"
					component={ ExploreScreen }
					options={ {
						tabBarIcon: ({ focused }) => <ExploreIcon focused={ focused } />,
						tabBarLabel: ({ focused }) => <Label focused={ focused }>Explore</Label>,
					} }
					listeners={ () => ({
						tabPress: () => handleTabListener(1)
					}) }
				/>
				<Tab.Screen
					name="Search"
					component={ SearchScreen }
					options={ {
						tabBarIcon: () => (
							<TouchableOpacity style={ { transform: [{ translateY: -24 }] } }>
								<SearchButton />
							</TouchableOpacity>
						),
						tabBarLabel: () => null,
					} }

				/>
				<Tab.Screen
					name="Map"
					component={ MapScreen }
					options={ {
						tabBarIcon: ({ focused }) => <MapIcon focused={ focused } />,
						tabBarLabel: ({ focused }) => <Label focused={ focused }>Map</Label>,
					} }
					listeners={ () => ({
						tabPress: () => handleTabListener(3)
					}) }
				/>
				<Tab.Screen
					name="Settings"
					component={ SettingsScreen }
					options={ {
						tabBarIcon: ({ focused }) => <SettingsIcon focused={ focused } />,
						tabBarLabel: ({ focused }) => <Label focused={ focused }>Settings</Label>,
					} }
					listeners={ () => ({
						tabPress: () => handleTabListener(4)
					}) }
				/>
			</Tab.Navigator>
			<Line style={ animatedStyles } />
		</>
	);
};

function SettingsScreen () {
	return (
		<View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
			<Text>Settings!</Text>
		</View>
	);
}

function MapScreen () {
	return (
		<View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
			<Text>Map!</Text>
		</View>
	);
}

function ExploreScreen () {
	return (
		<View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
			<Text>Explore!</Text>
		</View>
	);
}
function SearchScreen () {
	return (
		<View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
			<Text>Explore!</Text>
		</View>
	);
}

const Line = styled(Animated.View)`
	width: 32px;
	height: 2px;
	background-color: #1DAEFF;
	border-radius: 28px;
	position: absolute;
	bottom: 50px;
	left: 24px;
`;

const Label = styled.Text<{ focused: boolean }>`
	font-weight: 600;
	font-size: 10px;
	color: ${({ focused }) => (focused ? "#B9C2CD" : "#7E848B")};
`;
