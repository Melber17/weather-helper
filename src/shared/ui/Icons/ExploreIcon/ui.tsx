import * as React from "react";
import Animated, { interpolateColor, useAnimatedProps } from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";

interface IProps {
	isFocusedSharedValue: Animated.SharedValue<number>
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const ExploreIcon: React.FC<IProps> = (props) => {
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
				d="M12 10.68c-.726 0-1.32.594-1.32 1.32A1.32 1.32 0 1012 10.68zM12 0C5.37 0 0 5.37 0 12c0 6.624 5.37 12 12 12s12-5.376 12-12c0-6.63-5.37-12-12-12zm2.628 14.628L4.8 19.2l4.572-9.828L19.2 4.8l-4.572 9.828z"
				animatedProps={ animatedPropsStroke }

			/>
		</Svg>
	);
};
