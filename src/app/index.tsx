import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "react-native-splash-screen";
import { ThemeProvider } from "styled-components";

import { CustomStatusBar } from "../shared/ui/CustomStatusBar";
import { Routing } from "../screens";
import { WithNavigation } from "./providers";
import { theme } from "./styles/theme";

export const App: React.FC = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<ThemeProvider theme={ theme }>
			<SafeAreaProvider>
				<CustomStatusBar backgroundColor="#1D1743" />
				<WithNavigation>
					<Routing />
				</WithNavigation>
			</SafeAreaProvider>
		</ThemeProvider>
	);
};
