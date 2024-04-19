import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { TasksScreen, TaskDetailsScreen } from "../screens";
import { AppHeaderStyle } from "../components/header";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ presentation: "modal", ...AppHeaderStyle }}
    >
      <Stack.Screen name="Tasks" component={TasksScreen} />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetailsScreen}
        options={{ title: "Task details" }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
