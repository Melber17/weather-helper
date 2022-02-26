import { configureStore } from "@reduxjs/toolkit";
import reduxFlipper from "redux-flipper";

const middlewares = [];

if (__DEV__) {
	middlewares.push(reduxFlipper());
}

export const store = configureStore({
	reducer: {
	},
	middleware: middlewares
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
