import { AppRegistry } from "react-native";
import PushNotification from "react-native-push-notification";

import { name as appName } from "./app.json";
import { App } from "./src/app";

PushNotification.configure({
	requestPermissions: true,
	onRegister: function (token) {
		console.log("TOKEN:", token);
	},
	onNotification: function (notification) {
		console.log("NOTIFICATION:", notification);

		// process the notification

		// (required) Called when a remote is received or opened, or local notification is opened
		notification.finish(PushNotificationIOS.FetchResult.NoData);
	},

});

AppRegistry.registerComponent(appName, () => App);
