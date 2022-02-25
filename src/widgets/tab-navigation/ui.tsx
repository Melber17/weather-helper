import * as React from "react";
import { Text, TouchableOpacity, View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { HomeStack } from "../../screens/home";
import { HomeIcon, MapIcon, ExploreIcon, SettingsIcon } from "../../shared/ui";
import SearchButton from "../../shared/assets/icons/search-button-icon.svg";
import { getWidth } from "./lib";
import { MapStack } from "../../screens/map";

type TabStackType = {
	Home: undefined;
	Explore: undefined;
	Search: undefined;
	Map: undefined;
	Settings: undefined;
}

const Tab = createBottomTabNavigator<TabStackType>();

export const TabNavigation = () => {

	const config = {
		damping: 25,
		mass: 1,
		stiffness: 150,
		overshootClamping: false,
		restSpeedThreshold: 0.001,
		restDisplacementThreshold: 0.001,
	};
	const insets = useSafeAreaInsets();

	const isFocusedSharedValue = useSharedValue(20);

	const handleTabListener = (index: number) => {
		isFocusedSharedValue.value = withSpring((getWidth() * index) + 20, config);
	};

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [{ translateX: isFocusedSharedValue.value }]
	}));

	const handlePressSearch = () => {

	};

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
					component={ HomeStack }
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
							<TouchableOpacity style={ { alignItems: "center", width: 79, backgroundColor: "transparent" } }>
								<SearchButton />
							</TouchableOpacity>
						),

						tabBarItemStyle: { width: 20, transform: [{ translateY: -24 }], backgroundColor: "transparent" },
						tabBarLabel: () => null,
					} }
					listeners={ () => ({
						tabPress: handlePressSearch
					}) }
				/>
				<Tab.Screen
					name="Map"
					component={ MapStack }
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
			<Line style={ animatedStyles } width={ getWidth() } bottomInset={ insets.bottom } isAndroid={ Platform.OS === "android" } />
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

const Line = styled(Animated.View)<{width: number, isAndroid: boolean, bottomInset: number}>`
	width: ${({ width }) => width - 42}px;
	height: 2px;
	background-color: #1DAEFF;
	border-radius: 28px;
	position: absolute;
	bottom: ${({ isAndroid, bottomInset }) => isAndroid ? 50 : 50 + bottomInset}px;
`;

const Label = styled.Text<{ focused: boolean }>`
	font-weight: 600;
	font-size: 10px;
	color: ${({ focused }) => (focused ? "#B9C2CD" : "#7E848B")};
`;
