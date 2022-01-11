import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { ThemeProvider } from "styled-components";

import { Routing } from "../screens";
import { WithNavigationContainer } from "./providers";
import { GlobalStyle } from "./styles/globals";
import { theme } from "./styles/theme";

const App: React.FC = () => {
	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 1000);
	}, []);

	return (
		<ThemeProvider theme={ theme }>
			<WithNavigationContainer>
				<Routing />
			</WithNavigationContainer>
		</ThemeProvider>

	);
};

export default App;
