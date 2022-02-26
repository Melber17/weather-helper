import React from "react";
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters";
import styled from "styled-components/native";

import { FontStyles } from "../../../shared/config";
import { useAppSelector } from "../../../shared/lib";
import { Text } from "../../../shared/ui";
import { formatterDate, formatterUrlIcon } from "../lib";

export const CurrentForecast: React.FC = () => {
	const forecast = useAppSelector(store => store.currentForecast);

	if (!forecast.forecastData) {
		return (
			<Container>
				<Text>Loading...</Text>
			</Container>
		);
	}

	return (
		<Container>
			<CityTitle
				size={ 24 }
				fontStyle={ FontStyles.BOLD }
			>
				{forecast.forecastData?.location.name}
			</CityTitle>
			<SubText
				size={ 12 }
				fontStyle={ FontStyles.BOLD }
			>
				{forecast.forecastData?.location.country}
			</SubText>
			<DegreesWrapper 	>
				<DegreesText size={ 64 }
					fontStyle={ FontStyles.BOLD }>
					{forecast.forecastData.current.temp_c}
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
				{formatterDate()}
			</Text>

			<ForecastIcon
				source={ {
					uri: formatterUrlIcon(forecast.forecastData.current.condition.icon),
				} }
			/>

		</Container>
	);
};

const Container = styled.View`
  margin: 8px 16px 0 16px;
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
