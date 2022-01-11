import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {
	focused: boolean;
}

export const ExploreIcon: React.FC<IProps> = (props) => {
	const { focused } = props;

	return (
		<Svg
			width={ 24 }
			height={ 24 }
			viewBox="0 0 24 24"
			fill="none"
		>
			<Path
				d="M12 10.68c-.726 0-1.32.594-1.32 1.32A1.32 1.32 0 1012 10.68zM12 0C5.37 0 0 5.37 0 12c0 6.624 5.37 12 12 12s12-5.376 12-12c0-6.63-5.37-12-12-12zm2.628 14.628L4.8 19.2l4.572-9.828L19.2 4.8l-4.572 9.828z"
				fill={ focused ? "#1DAEFF" : "#67686D" }
			/>
		</Svg>
	);
};
