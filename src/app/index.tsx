import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

import { Routing } from "../screens";
import { WithNavigationContainer } from "./providers";

const App: React.FC = () => {
	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 1000);
	}, []);

	return (
		<WithNavigationContainer>
			<Routing />
		</WithNavigationContainer>
	);
};

export default App;
