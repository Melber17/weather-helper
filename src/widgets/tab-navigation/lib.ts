import { Dimensions } from "react-native";

export const getWidth = () => {
	const TABS_COUNT = 5;
	const width = Dimensions.get("window").width;

	return width / TABS_COUNT;
};
