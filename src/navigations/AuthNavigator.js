import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  AddPhoneNumberScreen,
  ConfirmPhoneNumberScreen,
  LoginScreen,
  RegisterScreen,
  WelcomeScreen,
} from "../screens";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
