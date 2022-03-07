import { createAsyncThunk } from "@reduxjs/toolkit";

import { ForecastAPI } from "../api";
import { setForecastData, setIsLoading } from "./slice";
import { IGetCurrentForecastPayload } from "./types";

export const getCurrentForecast = createAsyncThunk(
	"weather/forecast",
	async (payload: IGetCurrentForecastPayload, { dispatch }) => {
		try {
			dispatch(setIsLoading(true));
			const response = await ForecastAPI.getForecast(payload);

			dispatch(setForecastData(response));
		} catch (error) {
			console.log("Error getCurrentForecast", error);
		} finally {
			dispatch(setIsLoading(false));
		}
	},
);
