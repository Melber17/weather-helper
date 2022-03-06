
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const formatterDate = (date: string): string => {
	const dateArray = date.split(" ");
	const currentDate = new Date(dateArray[0]);
	const currentHour = +dateArray[1].split(":")[0];

	const dayName = days[currentDate.getDay()];
	const suffixOfHour = currentHour >= 12 ? "PM" : "AM";
	const hours = ((currentHour + 11) % 12 + 1) + ` ${suffixOfHour}`;

	return `${dayName}, ${hours}`;
};

export const formatterUrlIcon = (url: string) => {
	const result = url.slice(2);

	return `https://${result}`;
};
