import * as React from "react";
import { StatusBar, StatusBarStyle, Platform, View } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { PlatformType } from "../../lib";

interface IProps {
	backgroundColor?: string;
	barStyle?: StatusBarStyle;
	translucent?: boolean;
}

export const CustomStatusBar: React.FC<IProps> = ({ backgroundColor, barStyle = "dark-content", translucent }) => {

	const insets = useSafeAreaInsets();
	const backgroundColorStyle = {
		backgroundColor: backgroundColor ?? "#ffffff"
	};

	function renderStatusBar (): React.ReactElement {
		if (Platform.OS === PlatformType.IOS) {
			return (
				<View style={ [{ height: insets.top }, backgroundColorStyle] }>
					<StatusBar
						backgroundColor={ backgroundColor }
						barStyle={ barStyle } />
				</View>
			);
		}

		return (
			<StatusBar
				backgroundColor={ backgroundColor }
				barStyle={ barStyle } translucent={ translucent } />
		);
	}

	return (
		<>{renderStatusBar()}</>
	);
};
