import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import { ICurrentForecast, ForecastAPI, IHourForecast } from "../../../entities/weather-forecast";
import { CustomStatusBar, Text } from "../../../shared/ui";
import { CurrentForecast } from "../../../widgets/current-forecast";
import { TodaysForecast } from "../../../widgets/todays-forecast";

export const HomeScreen: React.FC = () => {
	const [forecastData, setForecastData] = useState<ICurrentForecast>();
	const [todaysForecastData, setTodaysForecastData] = useState<IHourForecast[]>();
	const fetchForecastData = async () => {
		const response = await ForecastAPI.getForecast({ city: "New York" });

		setForecastData(response);
	};

	const fetchTodaysForecastData = async () => {
		const response = await ForecastAPI.getTodaysForecast({ city: "New York" });

		setTodaysForecastData(response.hour);
	};

	useEffect(() => {
		fetchForecastData();
		fetchTodaysForecastData();
	}, []);

	if (!forecastData || !todaysForecastData) {
		return (
			<Container>
				<Text>Loading...</Text>
			</Container>
		);
	}

	return (
		<Container>
			<CustomStatusBar />

			<CurrentForecast forecastData={ forecastData }/>
			<TodaysForecast todaysForecastData={ todaysForecastData } />
		</Container>
	);
};

const Container = styled.View`
	flex: 1;
	margin: 0 16px;
`;
