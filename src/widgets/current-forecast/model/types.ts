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
