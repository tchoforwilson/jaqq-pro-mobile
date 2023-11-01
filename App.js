import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigations/AuthNavigator";
import NavigationTheme from "./src/navigations/NavigationTheme";
import AddPhoneNunberScreen from "./src/screens/AddPhoneNumberScreen";
import ConfirmPhoneNumberScreen from "./src/screens/ConfirmPhoneNumberScreen";

const App = () => {
  return (
    <ConfirmPhoneNumberScreen />
    // <NavigationContainer theme={NavigationTheme}>
    //   <AuthNavigator />
    // </NavigationContainer>
  );
};

export default App;
