import React from "react";
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters";
import styled from "styled-components/native";

import { FontStyles } from "../../../shared/config";
import { Badge, Text } from "../../../shared/ui";
import { formatterDate, formatterUrlIcon } from "../lib";
import RainIcon from "../../../shared/assets/icons/rainIcon.svg";
import WindIcon from "../../../shared/assets/icons/windIcon.svg";
import HumidityIcon from "../../../shared/assets/icons/humidityIcon.svg";
import { ICurrentForecast } from "../../../entities/weather-forecast";

interface IProps {
	forecastData: ICurrentForecast
}

export const CurrentForecast: React.FC<IProps> = ({ forecastData }) => {

	return (
		<Container>
			<CityTitle
				size={ 24 }
				fontStyle={ FontStyles.BOLD }
			>
				{forecastData.location.name}
			</CityTitle>
			<SubText
				size={ 12 }
				fontStyle={ FontStyles.BOLD }
			>
				{forecastData?.location.country}
			</SubText>
			<DegreesWrapper 	>
				<DegreesText size={ 64 }
					fontStyle={ FontStyles.BOLD }>
					{forecastData?.current.temp_c}
				</DegreesText>
				<DegreesUnit size={ 14 }
					fontStyle={ FontStyles.MEDIUM }>
					°C
				</DegreesUnit>
			</DegreesWrapper>
			<Text
				fontStyle={ FontStyles.MEDIUM }
				color="rgba(255, 255, 255, 0.5)"
				size={ 14 }>
				{formatterDate(forecastData.location.localtime)}
			</Text>

			<ForecastIcon
				source={ {
					uri: formatterUrlIcon(forecastData.current.condition.icon),
				} }
			/>
			<Wrapper>
				<Badge
					color="#658ED9"
					backgroundColor="rgba(101, 142, 217, 0.1)"
					icon={ <RainIcon /> }>
					{forecastData.current.humidity}%
				</Badge>
				<Badge
					color="#D86191"
					backgroundColor="rgba(216, 97, 145, 0.1)"
					icon={ <HumidityIcon /> }>
					{forecastData.current.precip_mm} mm
				</Badge>
				<Badge
					color="#5E4FC1"
					backgroundColor="rgba(101, 142, 217, 0.1)"
					icon={ <WindIcon /> }>
					{forecastData.current.wind_kph} km/h
				</Badge>
			</Wrapper>
		</Container>
	);
};

const Container = styled.View`
  margin-top: 8px;
  align-items: center;
`;

const CityTitle = styled(Text)`
  line-height: 28px;
`;

const SubText = styled(Text)`
  line-height: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: ${verticalScale(8)}px;
`;

const DegreesWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 16px;
`;

const DegreesText = styled(Text)`
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  color: #FFFFFF;
`;

const DegreesUnit = styled(Text)`
  line-height: 17px;
  transform: translateY(${moderateVerticalScale(7)}px);
`;

const ForecastIcon = styled.Image`
  width:${moderateScale(164)}px;
  height: ${moderateScale(164)}px;
  resize-mode: contain;
  margin-top: 16px;
`;

const Wrapper = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`;
