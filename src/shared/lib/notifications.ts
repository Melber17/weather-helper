import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";

export const requestNotificationsPermission = async () => {
	const authStatus = await messaging().requestPermission();
	const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

	if (enabled) {
		console.log("Authorization status:", authStatus);
	}
};

export const getNotificationToken = async () => {
	try {
		const token = await messaging().getToken();

		if (!!token) {
			await AsyncStorage.setItem("FcmToken", token);
		}
		console.log("Token =>", token);
	} catch (err) {
		console.log("Error =>", err);
	}
};
