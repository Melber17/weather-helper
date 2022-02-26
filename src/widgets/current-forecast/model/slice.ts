import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICurrentForecast } from "./types";

const initialState = {
	forecastData: null as ICurrentForecast | null,
	isLoading: false,
};

export const currentForecastSlice = createSlice({
	name: "forecast/current/slice",
	initialState,
	reducers: {
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setForecastData: (state, action: PayloadAction<ICurrentForecast>) => {
			state.forecastData = action.payload;
		}
	},
});

export const {
	setIsLoading,
	setForecastData
} = currentForecastSlice.actions;
