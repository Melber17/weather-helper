import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import styled from "styled-components/native";

import { Text } from "../../../shared/ui";
import { formatterHours, formatterUrlIcon } from "../../current-forecast";

interface IProps {
	temperature: number;
	icon: string;
	time: string;
}

export const TodaysForecastCard: React.FC<IProps> = (props) => {
	const { temperature, icon, time } = props;

	return (
		<Wrapper>
			<TemperatureText size={ 18 }>{temperature}°C</TemperatureText>
			<WeatherIcon source={ { uri: formatterUrlIcon(icon) } }/>
			<TimeText size={ 18 }>{formatterHours(time)}</TimeText>
		</Wrapper>
	);
};

const Wrapper = styled.View`
	width: ${scale(70)}px;
	align-items: center;
	margin-right: 16px;
`;

const WeatherIcon = styled.Image`
	width: 100%;
	height: ${verticalScale(44)}px;
`;

const TemperatureText = styled(Text)`
	margin-bottom: ${verticalScale(24)}px;
`;

const TimeText = styled(Text)`
	margin-top: ${verticalScale(24)}px;
`;
