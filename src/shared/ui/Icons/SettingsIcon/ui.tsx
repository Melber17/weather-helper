import * as React from "react";
import Animated, { interpolateColor, useAnimatedProps } from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

interface IProps {
	isFocusedSharedValue: Animated.SharedValue<number>
}

const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export const SettingsIcon: React.FC<IProps> = (props) => {
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
			<AnimatedG clipPath="url(#clip0_109_99)"
				animatedProps={ animatedPropsStroke }

			>
				<Path d="M5.819 10.107c.666-.09 1.332.14 1.805.612l1.193 1.193 1.13-1.124-1.632-1.626a.651.651 0 01.92-.92l1.632 1.631 1.128-1.124-1.198-1.199a2.154 2.154 0 01-.612-1.805A5.08 5.08 0 004.401.055a.303.303 0 00-.169.513l1.537 1.537a1.864 1.864 0 010 2.64l-.945.945a1.864 1.864 0 01-2.641 0L.641 4.154a.303.303 0 00-.512.169 5.08 5.08 0 005.69 5.784zM15.377 12.13l-1.129 1.125 6.705 6.704a.651.651 0 01-.92.92l-6.705-6.704-1.129 1.124 6.908 6.908a2.244 2.244 0 003.173-3.173l-6.903-6.903z" />
				<Path d="M17.968 7.655h2.98l2.979-5.953L22.44.215 16.48 3.189v2.979L8.385 14.24l-1.457-1.452-5.869 5.868a3.128 3.128 0 000 4.427 3.128 3.128 0 004.426 0l5.869-5.87-1.487-1.486 8.101-8.072z" />
			</AnimatedG>
			<Defs>
				<ClipPath id="clip0_109_99">
					<AnimatedPath
						animatedProps={ animatedPropsStroke }

						d="M0 0H24V24H0z" />
				</ClipPath>
			</Defs>
		</Svg>
	);

};
