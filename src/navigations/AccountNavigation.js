import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../screens";

const Stack = createStackNavigator();

const AccountNavigation = () => {
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
  </Stack.Navigator>;
};

export default AccountNavigation;
