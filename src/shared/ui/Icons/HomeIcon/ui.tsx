import React from "react";
import Animated, { interpolateColor, useAnimatedProps } from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";

interface IProps {
	isFocusedSharedValue: Animated.SharedValue<number>
}
const AnimatedPath = Animated.createAnimatedComponent(Path);

export const HomeIcon: React.FC<IProps> = (props) => {
	const { isFocusedSharedValue } = props;

	const animatedPropsStroke = useAnimatedProps(() => {
		const stroke = interpolateColor(
			isFocusedSharedValue.value,
			[0, 1],
			["#67686D", "#1DAEFF"],
			"RGB"
		);

		return { stroke };
	});

	return (

		<Svg
			width={ scale(24) }
			height={ scale(24) }
			viewBox={ `0 0 24 24` }
			fill="none"
		>
			<AnimatedPath
				d="M11.311 2.154l-9 8.55A1 1 0 002 11.43V21a1 1 0 001 1h5.946c.03 0 .054-.024.054-.054V17a3 3 0 116 0v4.946c0 .03.024.054.054.054H21a1 1 0 001-1v-9.57a1 1 0 00-.311-.726l-9-8.55a1 1 0 00-1.378 0z"
				strokeWidth={ 2 }
				strokeLinecap="round"
				strokeLinejoin="round"
				animatedProps={ animatedPropsStroke }
			/>
		</Svg>

	);
};
