import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "react-native-splash-screen";
import { ThemeProvider } from "styled-components";

import { CustomStatusBar } from "../processes";
import { Routing } from "../screens";
import { WithNavigationContainer } from "./providers";
import { theme } from "./styles/theme";

const App: React.FC = () => {
	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 1000);
	}, []);

	return (
		<ThemeProvider theme={ theme }>
			<SafeAreaProvider>

				<CustomStatusBar backgroundColor="#1D1743" />
				<WithNavigationContainer>
					<Routing />
				</WithNavigationContainer>
			</SafeAreaProvider>
		</ThemeProvider>
	);
};

export default App;
