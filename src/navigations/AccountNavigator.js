import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  AccountScreen,
  ProfileScreen,
  ServicesScreen,
  UpdatePasswordScreen,
  UpdatePhoneNumberScreen,
} from "../screens";

const Stack = createStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} />
      <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
      <Stack.Screen name="UpdatePhone" component={UpdatePhoneNumberScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
