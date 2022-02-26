import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "react-native-splash-screen";
import { ThemeProvider } from "styled-components";

import { Routing } from "../screens";
import { WithNavigation } from "./providers";
import { WithRedux } from "./providers/with-redux";
import { theme } from "./styles/theme";

export const App: React.FC = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	LogBox.ignoreAllLogs();

	return (
		<WithRedux>
			<ThemeProvider theme={ theme }>
				<SafeAreaProvider>
					<WithNavigation>
						<Routing />
					</WithNavigation>
				</SafeAreaProvider>
			</ThemeProvider>
		</WithRedux>
	);
};
