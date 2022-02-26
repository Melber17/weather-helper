import * as React from "react";
import { Provider } from "react-redux";

import { store } from "../store";

interface IProps {
	children: React.ReactNode
}

export const WithRedux: React.FC<IProps> = ({ children }) => (
	<Provider store={ store }>
		{children}
	</Provider>
);
