import { configureStore } from "@reduxjs/toolkit";
import reduxFlipper from "redux-flipper";

import { currentForecastSlice } from "../../entities/weather-forecast";

export const store = configureStore({
	reducer: {
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
