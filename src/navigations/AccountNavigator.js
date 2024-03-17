import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  AccountScreen,
  ProfileScreen,
  ServicesScreen,
  UpdatePasswordScreen,
  UpdatePhoneNumberScreen,
  UpdateProfileImageScreen,
} from "../screens";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} />
      <Stack.Screen
        name="UpdateProfileImage"
        component={UpdateProfileImageScreen}
      />
      <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
      <Stack.Screen
        name="UpdatePhoneNumber"
        component={UpdatePhoneNumberScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
