import { useEffect } from "react";
import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import rootNavigation from "../navigations/rootNavigation";
import userServices from "../services/user.services";

const useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener((notification) => {
        rootNavigation.navigate(notificationListener);
      });
  }, []);

  const registerForPushNotifications = async () => {
    if (Device.isDevice) {
      try {
        const { status: existingStatus } =
          await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          alert("Failed to get push token for push notification!");
          return;
        }
        const { data: pushToken } = await Notifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig.extra.eas.projectId,
        });
        userServices.updatePushToken(pushToken);
      } catch (error) {
        console.log("Error getting a push token " + error);
      }
    }
  };
};

export default useNotifications;
