import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AddPhoneNumberScreen, ConfirmPhoneNumberScreen } from "../screens";

const Stack = createStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddPhoneNumber" component={AddPhoneNumberScreen} />
      <Stack.Screen
        name="ConfirmPhoneNumber"
        component={ConfirmPhoneNumberScreen}
      />
    </Stack.Navigator>
  );
};

export default RegisterNavigator;
