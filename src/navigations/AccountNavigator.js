import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  AccountScreen,
  ProfileScreen,
  ReviewDetailsScreen,
  ReviewsScreen,
  ServicesScreen,
  UpdatePasswordScreen,
  UpdatePhoneNumberScreen,
  UpdateProfileImageScreen,
} from "../screens";
import { AppHeaderStyle } from "../components/header";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={AppHeaderStyle}>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} />
      <Stack.Screen name="Reviews" component={ReviewsScreen} />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetailsScreen}
        options={({ route }) => ({ title: route.params.task.service.title })}
      />
      <Stack.Screen
        name="UpdateProfileImage"
        component={UpdateProfileImageScreen}
        options={{ title: "Change photo" }}
      />
      <Stack.Screen
        name="UpdatePhoneNumber"
        component={UpdatePhoneNumberScreen}
        options={{ title: "Change number" }}
      />
      <Stack.Screen
        name="UpdatePassword"
        component={UpdatePasswordScreen}
        options={{ title: "Change password" }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
