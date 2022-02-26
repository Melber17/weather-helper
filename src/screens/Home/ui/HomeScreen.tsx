import React, { useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { useAppDispatch } from "../../../shared/lib";
import { CustomStatusBar } from "../../../shared/ui";
import { CurrentForecast, getCurrentForecast } from "../../../widgets/current-forecast";

export const HomeScreen: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCurrentForecast({ city: "New York" }));
	}, []);

	return (
		<View style={ { flex: 1 } }>
			<CustomStatusBar />
			<CurrentForecast />
		</View>
	);
};

const Text = styled.Text`
	font-size: 18px;
	color: #fff;
	font-family: Roboto-Medium;
	`;
