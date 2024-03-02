import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ServicesScreen, ServiceDetailsScreen } from "../screens";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Services" component={ServicesScreen} />
      <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
