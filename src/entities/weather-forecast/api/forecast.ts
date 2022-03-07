// eslint-disable-next-line import/no-unresolved
import { API_KEY } from "@env";

import { instance } from "../../../shared/api";
import { ICurrentForecast, IGetCurrentForecastPayload, IGetTodaysForecastPayload, ITodaysForecast } from "../model";

export const ForecastAPI = {
	async getForecast ({ city }: IGetCurrentForecastPayload): Promise<ICurrentForecast> {
		const response = await instance.get(`current.json?key=${API_KEY}&q=${city}&aqi=no`);

		return response.data;
	},
	async getTodaysForecast ({ city }: IGetTodaysForecastPayload): Promise<ITodaysForecast> {
		const response = await instance.get(`forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`);

		return response.data.forecast.forecastday[0];
	}
};
