import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

import { Navigation } from "./navigation";
import { WithNavigationContainer } from "./providers";

const App: React.FC = () => {
	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 1000);
	}, []);

	return (
		<WithNavigationContainer>
			<Navigation />
		</WithNavigationContainer>
	);
};

export default App;
