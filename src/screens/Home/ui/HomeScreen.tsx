import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import { ICurrentForecast, ForecastAPI } from "../../../entities/weather-forecast";
import { useAppDispatch } from "../../../shared/lib";
import { CustomStatusBar, Text } from "../../../shared/ui";
import { CurrentForecast } from "../../../widgets/current-forecast";
import { TodaysForecast } from "../../../widgets/todays-forecast";

export const HomeScreen: React.FC = () => {
	const [forecastData, setForecastData] = useState<ICurrentForecast>();

	const fetchForecastData = async () => {
		const response = await ForecastAPI.getForecast({ city: "New York" });

		setForecastData(response);
	};

	useEffect(() => {
		fetchForecastData();
	}, []);

	if (!forecastData) {
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
			<TodaysForecast />
		</Container>
	);
};

const Container = styled.View`
	flex: 1;
	margin: 0 16px;
`;
