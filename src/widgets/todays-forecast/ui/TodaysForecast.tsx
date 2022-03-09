import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { IHourForecast } from "../../../entities/weather-forecast";
import { FontStyles } from "../../../shared/config";
import { Text } from "../../../shared/ui";
import { TodaysForecastCard } from "./TodaysForecastCard";

interface IProps {
	todaysForecastData: IHourForecast[]
}

export const TodaysForecast: React.FC<IProps> = ({ todaysForecastData }) => {

	const keyExtractor = (item: IHourForecast) => item.time;

	return (
		<Container>
			<Title fontStyle={ FontStyles.BOLD } size={ 24 }>Today</Title>
			<FlatList
				data={ todaysForecastData }
				renderItem={ ({ item }) => (
					<TodaysForecastCard
						icon={ item.condition.icon }
						temperature={ item.temp_c }
						time={ item.time }
					/>
				) }
				bounces={ false }
				keyExtractor={ keyExtractor }
				horizontal={ true }
			/>
		</Container>
	);
};

const Container = styled.View`
  margin-top: 24px;
`;

const Title = styled(Text)`
	margin-bottom: 24px;
`;
