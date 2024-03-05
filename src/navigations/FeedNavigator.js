import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { TasksScreen, TaskDetailsScreen } from "../screens";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name="Tasks" component={TasksScreen} />
      <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
