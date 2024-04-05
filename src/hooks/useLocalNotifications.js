import { useContext } from "react";
import { LocalNotificationContext } from "../context";

const useLocalNotifications = () => {
  const {
    localNotification,
    setLocalNotification,
    showLocalNotification,
    setShowLocalNotification,
  } = useContext(LocalNotificationContext);

  return {
    localNotification,
    setLocalNotification,
    showLocalNotification,
    setShowLocalNotification,
  };
};
