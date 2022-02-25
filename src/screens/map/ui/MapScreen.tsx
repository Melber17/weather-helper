import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Text, View } from "react-native";

import { MapStackType } from "./MapStack";

export interface IProps {
	navigation: StackNavigationProp<MapStackType, "MapScreen">
}

export const MapScreen = (props: IProps) => (
	<View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
		<Text>HI!</Text>
	</View>
);
