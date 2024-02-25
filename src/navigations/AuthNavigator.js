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
      <Stack.Screen name="Add Phone Number" component={AddPhoneNumberScreen} />
      <Stack.Screen
        name="Confirm Phone Number"
        component={ConfirmPhoneNumberScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
