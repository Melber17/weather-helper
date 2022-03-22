import * as React from "react";
import Animated, { interpolateColor, useAnimatedProps } from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";

interface IProps {
	isFocusedSharedValue: Animated.SharedValue<number>
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const MapIcon: React.FC<IProps> = (props) => {
	const { isFocusedSharedValue } = props;

	const animatedPropsStroke = useAnimatedProps(() => {
		const fill = interpolateColor(
			isFocusedSharedValue.value,
			[0, 1],
			["#67686D", "#1DAEFF"],
			"RGB"
		);

		return { fill };
	});

	return (
		<Svg
			width={ scale(24) }
			height={ scale(24) }
			viewBox="0 0 24 24"
			fill="none"
		>
			<AnimatedPath
				d="M17.197 19.316l-.138.819c4.348.39 5.81 1.133 5.81 1.413 0 .553-3.835 1.629-10.869 1.629S1.13 22.1 1.13 21.548c0-.28 1.46-1.023 5.804-1.413l-.137-.819C4.257 19.544 0 20.138 0 21.548 0 23.233 6.22 24 12 24s12-.767 12-2.452c0-1.41-4.262-2.004-6.803-2.232z"
				animatedProps={ animatedPropsStroke }

			/>
			<AnimatedPath
				d="M12.471 21.787C16.628 16.427 21 11.143 21 7.271 21 3.256 16.97 0 11.999 0 7.029 0 3 3.256 3 7.272c0 3.863 4.54 9.394 8.527 14.516.218.283.726.283.944-.002zM7.697 7.274c0-1.92 1.925-3.477 4.302-3.477 2.374 0 4.302 1.556 4.302 3.477 0 1.919-1.925 3.476-4.302 3.476-2.375 0-4.302-1.557-4.302-3.476z"
				animatedProps={ animatedPropsStroke }

			/>
		</Svg>
	);
};
