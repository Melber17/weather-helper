import { configureStore } from "@reduxjs/toolkit";
import reduxFlipper from "redux-flipper";

import { weatherSlice } from "../../entities/weather";
import { currentForecastSlice } from "../../widgets/current-forecast";

export const store = configureStore({
	reducer: {
		weather: weatherSlice.reducer,
		currentForecast: currentForecastSlice.reducer
	},
	middleware: (getDefaultMiddleware) => {
		if (__DEV__) {
			return getDefaultMiddleware().concat(reduxFlipper());
		}

		return getDefaultMiddleware();
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
