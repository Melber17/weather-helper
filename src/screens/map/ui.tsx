import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Text, View } from "react-native";

import { MapStackType } from "../map-stack/ui";

export interface IProps {
	navigation: StackNavigationProp<MapStackType, "Map">
}

export const MapScreen = (props: IProps) => {
	const { navigation } = props;

	return (
		<View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
			<Text>HI!</Text>
		</View>
	);
};
