import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { AddPhoneNumberScreen, ConfirmPhoneNumberScreen } from "../screens";

const Stack = createStackNavigator();

const ScreenNavigator = ({ user }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : !user.phoneValidated && !user.smsCodeSent ? (
        <Stack.Screen name="AddPhoneNumber" component={AddPhoneNumberScreen} />
      ) : !user.phoneValidated && user.smsCodeSent ? (
        <Stack.Screen
          name="ConfirmPhoneNumber"
          component={ConfirmPhoneNumberScreen}
        />
      ) : (
        <Stack.Screen name="App" component={AppNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default ScreenNavigator;
