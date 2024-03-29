import { NativeModules, Platform } from "react-native";

export default useDate = () => {
  console.log("here");
  // Get the device locale
  //   const deviceLocale =
  //     Platform.OS === "ios"
  //       ? NativeModules.SettingsManager.settings.AppleLocale ||
  //         NativeModules.SettingsManager.settings.AppleLanguages[0]
  //       : NativeModules.I18nManager.localeIdentifier;

  // Format the date based on the device locale
  //   const today = new Date().toLocaleDateString("en_US", {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //   });

  //   return { today };
};
