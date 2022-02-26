
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const formatterDate = (): string => {
	const currentDate = new Date();
	const currentHour = currentDate.getHours();

	const dayName = days[currentDate.getDay()];
	const suffixOfHour = currentHour >= 12 ? "PM" : "AM";
	const hours = ((currentHour + 11) % 12 + 1) + ` ${suffixOfHour}`;

	return `${dayName}, ${hours}`;
};

export const formatterUrlIcon = (url: string) => {
	const result = url.slice(2);

	return `https://${result}`;
};
