import * as React from "react";
import { View, StatusBar, StatusBarStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IProps {
	backgroundColor: string;
	barStyle?: StatusBarStyle
}

export const CustomStatusBar: React.FC<IProps> = ({ backgroundColor, barStyle = "light-content" }) => {

	const insets = useSafeAreaInsets();

	return (
		<View style={ { height: insets.top, backgroundColor } }>
			<StatusBar
				backgroundColor={ backgroundColor }
				barStyle={ barStyle } />
		</View>
	);
};
