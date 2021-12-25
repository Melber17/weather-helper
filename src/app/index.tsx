import React from "react";

import { Navigation } from "./navigation";
import { WithNavigationContainer } from "./providers";

const App: React.FC = () => (
	<WithNavigationContainer>
		<Navigation />
	</WithNavigationContainer>
);

export default App;
