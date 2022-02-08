import { SCREEN_WIDTH } from "../../../shared/constants";

export const getWidth = (): number => {
	const width = SCREEN_WIDTH - 24;

	return width / 5;
};
