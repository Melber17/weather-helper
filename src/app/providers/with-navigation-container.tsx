import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MyTheme } from "../styles/globals";

interface IProps {
	children: React.ReactNode
}

export const WithNavigationContainer: React.FC<IProps> = ({ children }) => (
	<NavigationContainer theme={ MyTheme }>
		{children}
	</NavigationContainer>
);
