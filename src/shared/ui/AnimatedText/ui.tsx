import React from "react";
import Animated, { interpolateColor, useAnimatedStyle } from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";

interface IProps {
	isFocused: Animated.SharedValue<number>;
	activeColor: string;
	passiveColor: string;
}

export const AnimatedText: React.FC<IProps> = (props) => {
	const { children, isFocused, activeColor, passiveColor } = props;
	const labelAnimatedStyles = useAnimatedStyle(() => {
		const color = interpolateColor(
			isFocused.value,
			[0, 1],
			[passiveColor, activeColor],
			"RGB"
		);

		return { color };
	});

	return (
		<Label style={ [labelAnimatedStyles] }>{children}</Label>
	);
};

const Label = styled(Animated.Text)`
	font-weight: 600;
	font-size: ${moderateScale(10)}px;
`;
