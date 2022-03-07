export interface ICurrentForecast {
	location: {
		name: string;
		region: string;
		country: string;
		localtime: string;
		lat: number;
		lon: number;
	};
	current: {
		temp_c: number;
		condition: {
			text: string;
			icon: string;
		};
		wind_kph: number;
		humidity: number;
		precip_mm: number;
	}
}

export interface IGetCurrentForecastPayload {
	city: string;
}

export type IGetTodaysForecastPayload = IGetCurrentForecastPayload

export interface IHourForecast {
	time_epoch: number;
	time: string;
	temp_c: number;
	condition: {
		icon: string;
	}
}

export interface ITodaysForecast {
	hour: IHourForecast[]
}
