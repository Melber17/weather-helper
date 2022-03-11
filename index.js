import { AppRegistry } from "react-native";
import PushNotification from "react-native-push-notification";

import { name as appName } from "./app.json";
import { App } from "./src/app";

PushNotification.configure({
	requestPermissions: true
});

AppRegistry.registerComponent(appName, () => App);
