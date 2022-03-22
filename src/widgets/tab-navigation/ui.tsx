import * as React from "react";
import { Text, TouchableOpacity, View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale, scale } from "react-native-size-matters";

import { HomeStack } from "../../screens/home";
import { HomeIcon, MapIcon, ExploreIcon, SettingsIcon, AnimatedText } from "../../shared/ui";
import SearchButton from "../../shared/assets/icons/search-button-icon.svg";
import { getWidth } from "./lib";
import { MapStack } from "../../screens/map";
import { ACTIVE_COLOR, PASSIVE_COLOR } from "./constants";

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
	const isFocusedHomeSharedValue = useSharedValue(1);
	const isFocusedExploreSharedValue = useSharedValue(0);
	const isFocusedMapSharedValue = useSharedValue(0);
	const isFocusedSettingsSharedValue = useSharedValue(0);
	const activeIndex = useSharedValue(0);

	const handleResetAllSharedValues = () => {
		"worklet";
		isFocusedHomeSharedValue.value = withSpring(0, config);
		isFocusedExploreSharedValue.value = withSpring(0, config);
		isFocusedMapSharedValue.value = withSpring(0, config);
		isFocusedSettingsSharedValue.value = withSpring(0, config);
	};
	const handleTabListener = (index: number) => {
		"worklet";
		isFocusedSharedValue.value = withSpring((getWidth() * index) + 20, config);
		if (activeIndex.value === index) {
			return;
		}
		activeIndex.value = index;
		handleResetAllSharedValues();
		switch (index) {
		case 0:
			isFocusedHomeSharedValue.value = withSpring(1, config);
			break;
		case 1:
			isFocusedExploreSharedValue.value = withSpring(1, config);
			break;
		case 3:
			isFocusedMapSharedValue.value = withSpring(1, config);
			break;
		case 4:
			isFocusedSettingsSharedValue.value = withSpring(1, config);
			break;
		}

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
					tabBarLabelPosition: "below-icon"
				} }

			>
				<Tab.Screen
					name="Home"
					component={ HomeStack }
					options={ {
						tabBarIcon: () => <HomeIcon isFocusedSharedValue={ isFocusedHomeSharedValue } />,
						tabBarLabel: () =>
							<AnimatedText
								passiveColor={ PASSIVE_COLOR }
								activeColor={ ACTIVE_COLOR }
								isFocused={ isFocusedHomeSharedValue } >
								Home
							</AnimatedText>,
					} }
					listeners={ () => ({
						tabPress: () => handleTabListener(0)
					}) }
				/>
				<Tab.Screen
					name="Explore"
					component={ ExploreScreen }
					options={ {
						tabBarIcon: () => <ExploreIcon isFocusedSharedValue={ isFocusedExploreSharedValue }/>,
						tabBarLabel: () =>
							<AnimatedText
								passiveColor={ PASSIVE_COLOR }
								activeColor={ ACTIVE_COLOR }
								isFocused={ isFocusedExploreSharedValue }>
								Explore
							</AnimatedText>,
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
							<TouchableOpacity style={ { alignItems: "center", width: scale(79) } }>
								<SearchButton />
							</TouchableOpacity>
						),

						tabBarItemStyle: { transform: [{ translateY: -20 }] },
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
						tabBarIcon: () => <MapIcon isFocusedSharedValue={ isFocusedMapSharedValue }/>,
						tabBarLabel: () => <AnimatedText
							passiveColor={ PASSIVE_COLOR }
							activeColor={ ACTIVE_COLOR }
							isFocused={ isFocusedMapSharedValue }>
							Map
						</AnimatedText>,
					} }
					listeners={ () => ({
						tabPress: () => handleTabListener(3)
					}) }
				/>
				<Tab.Screen
					name="Settings"
					component={ SettingsScreen }
					options={ {
						tabBarIcon: () => <SettingsIcon isFocusedSharedValue={ isFocusedSettingsSharedValue } />,
						tabBarLabel: () => <AnimatedText
							passiveColor={ PASSIVE_COLOR }
							activeColor={ ACTIVE_COLOR }
							isFocused={ isFocusedSettingsSharedValue }>
							Settings
						</AnimatedText>,
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
	bottom: ${({ isAndroid, bottomInset }) => isAndroid ? 50 : 45 + bottomInset}px;
`;

const Label = styled(Animated.Text)`
	font-weight: 600;
	font-size: ${moderateScale(10)}px;
`;
