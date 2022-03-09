import * as React from "react";
import { StatusBar, StatusBarStyle, Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { PlatformType } from "../../lib";

interface IProps {
	backgroundColor?: string;
	barStyle?: StatusBarStyle;
	translucent?: boolean;
}

export const CustomStatusBar: React.FC<IProps> = ({ backgroundColor, barStyle = "light-content", translucent = false }) => {

	const insets = useSafeAreaInsets();
	const backgroundColorStyle = backgroundColor ?? "#1D1743";

	function renderStatusBar (): React.ReactElement {
		if (backgroundColor === "transparent" && Platform.OS === PlatformType.IOS) {
			return (
				<></>
			);
		}
		if (Platform.OS === PlatformType.IOS) {
			return (
				<View style={ [{ height: insets.top, backgroundColor: backgroundColorStyle }] }>
					<StatusBar
						backgroundColor={ backgroundColor }
						barStyle={ barStyle } />
				</View>
			);
		}

		return (
			<StatusBar
				backgroundColor={ backgroundColorStyle }
				barStyle={ barStyle } translucent={ translucent } />
		);
	}

	return (
		<>{renderStatusBar()}</>
	);
};
