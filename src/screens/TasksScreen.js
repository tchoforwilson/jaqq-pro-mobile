import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { AppScreen } from "../components/common";
import colors from "../configurations/colors";
import { Card } from "../components/cards";
import routes from "../routes";

const tasks = [
  {
    id: 1,
    name: "Wedding Photographer",
    price: 30000,
    location: "Bonapriso, douala",
  },
  {
    id: 2,
    name: "Carpenter",
    price: 80000,
    location: "Ndokoti, douala",
  },
  {
    id: 3,
    name: "Builder",
    price: 500000,
    location: "Bonaberi, douala",
  },
];

const TasksScreen = ({ navigation }) => {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            subTitle={item.price + " XAF"}
            location={item.location}
            onPress={() => navigation.navigate(routes.TASK_DETAILS, item)}
          />
        )}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
});

export default TasksScreen;
