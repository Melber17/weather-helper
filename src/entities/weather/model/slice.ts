import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	weatherData: []
};

export const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		setWeatherData: (state, action: PayloadAction<[]>) => {
			state.weatherData = action.payload;
		},
	},
});

export const {
	setWeatherData
} = weatherSlice.actions;
