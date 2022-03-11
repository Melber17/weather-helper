import React from "react";
import FastImage from "react-native-fast-image";
import Animated, { FadeIn } from "react-native-reanimated";
import { scale, verticalScale } from "react-native-size-matters";
import styled from "styled-components/native";

import { Text } from "../../../shared/ui";
import { formatterHours, formatterUrlIcon } from "../../current-forecast";

interface IProps {
	temperature: number;
	icon: string;
	time: string;
	index: number
}

export const TodaysForecastCard: React.FC<IProps> = (props) => {
	const { temperature, icon, time, index } = props;

	return (
		<Wrapper entering={ FadeIn.delay(100 * index) }>
			<TemperatureText size={ 18 }>{temperature}°C</TemperatureText>
			<WeatherIcon source={ { uri: formatterUrlIcon(icon), priority: FastImage.priority.high } } resizeMode="contain"/>
			<TimeText size={ 18 }>{formatterHours(time)}</TimeText>
		</Wrapper>
	);
};

const Wrapper = styled(Animated.View)`
	width: ${scale(70)}px;
	align-items: center;
	margin-right: 16px;
`;

const WeatherIcon = styled(FastImage)`
	width: 100%;
	min-height: ${verticalScale(70)}px;
`;

const TemperatureText = styled(Text)`
	margin-bottom: ${verticalScale(24)}px;
`;

const TimeText = styled(Text)`
	margin-top: ${verticalScale(6)}px;
`;
