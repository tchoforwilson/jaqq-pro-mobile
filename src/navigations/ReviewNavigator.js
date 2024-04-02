import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ReviewDetailsScreen, ReviewsScreen } from "../screens";

const Stack = createStackNavigator();

const ReviewNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Reviews" component={ReviewsScreen} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ReviewNavigator;
