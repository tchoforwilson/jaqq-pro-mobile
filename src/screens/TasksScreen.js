import React, { Fragment, useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import tasksService from "../services/tasks.services";
import { AppScreen, AppText } from "../components/common";
import colors from "../configurations/colors";
import routes from "../routes";
import { FilterTaskModal } from "../components/modals";
import { AppButton } from "../components/buttons";
import { AppActivityIndicator } from "../components/indicators";
import { useApi } from "../hooks";

const TaskItem = ({ task, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.taskitem}>
        <View style={styles.detialsContainer}>
          <AppText style={styles.name}>{task.name}</AppText>
          <AppText style={styles.price}>{task.price + " XAF"}</AppText>
        </View>
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons
            name="map-marker"
            size={25}
            color={colors.primary}
            style={styles.icon}
          />
          <AppText style={styles.location}>{task.location}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
  }),
  onPress: PropTypes.func.isRequired,
};

const TasksScreen = ({ navigation }) => {
  const {
    data: tasks,
    error,
    loading,
    request: loadTasks,
  } = useApi(tasksService.getAllTasks);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <Fragment>
      <AppActivityIndicator visible={loading} />
      <AppScreen style={styles.screen}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="sort"
            size={28}
            color={colors.grey_dark_1}
            onPress={() => setModalVisible(true)}
          />
        </View>
        {error && (
          <Fragment>
            <AppText>Couldn't retrieve the tasks.</AppText>
            <AppButton title="Retry" onPress={loadTasks} />
          </Fragment>
        )}

        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id.toString()}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onPress={() => navigation.navigate(routes.TASK_DETAILS, item)}
            />
          )}
        />

        <FilterTaskModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(!modalVisible)}
          onSubmit={handleSubmit}
        />
      </AppScreen>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  header: {
    justifySelf: "flex-end",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  taskitem: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  detialsContainer: {
    marginBottom: 15,
  },
  name: {
    fontWeight: 800,
    fontSize: 18,
    marginBottom: 5,
    color: colors.primary,
  },
  price: {
    fontWeight: 500,
    color: colors.secondary,
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  location: {
    color: colors.grey_dark_2,
  },
});

export default TasksScreen;
