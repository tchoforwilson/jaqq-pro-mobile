import { NativeModules, Platform } from "react-native";
import moment from "moment";

export default useDate = () => {
  // Get the device locale
  // const deviceLocale =
  // Platform.OS === "ios"
  //   ? NativeModules.SettingsManager.settings.AppleLocale ||
  //     NativeModules.SettingsManager.settings.AppleLanguages[0]
  //   : NativeModules.I18nManager.localeIdentifier;

  // Format the date based on the device locale
  // const today = new Date().toLocaleDateString(deviceLocale, {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  // });

  // Get elapse time

  const moment = require("moment");

  function getElapsedTime(date) {
    const today = moment();
    const diffDays = today.diff(moment(date), "days");

    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffDays === 7) {
      return "A week ago";
    } else if (diffDays <= 365) {
      return "a months ago";
    } else {
      return `${Math.floor(diffDays / 365)} years ago`;
    }
  }

  return { getElapsedTime };
};
