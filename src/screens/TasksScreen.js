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
import { useApi, useModal } from "../hooks";

const TaskItem = ({ task, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.taskitem}>
        <View style={styles.detialsContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AppText style={styles.title}>{task.service.title}</AppText>
            <AppText style={styles.status}>{task.status}</AppText>
          </View>
          <AppText style={styles.price}>
            {task.pricing.minPrice + " XAF"}
          </AppText>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.locationContainer}>
            <MaterialCommunityIcons
              name="map-marker"
              size={25}
              color={colors.primary}
              style={styles.icon}
            />
            <AppText style={styles.location}>{task.location.name}</AppText>
          </View>
          <AppText style={styles.date}>
            {new Date(task.updatedAt).toLocaleDateString()}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    pricing: PropTypes.shape({
      minPrice: PropTypes.number.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    updatedAt: PropTypes.string.isRequired,
    service: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
  onPress: PropTypes.func.isRequired,
};

const TasksScreen = ({ navigation }) => {
  const { toggleModal } = useModal();
  const [taskStatus, setTaskStatus] = useState("none");
  const {
    data: tasks,
    error,
    loading,
    request: loadTasks,
  } = useApi(tasksService.getAllTasks);

  const handleSubmit = (values) => {
    const { status } = values;

    setTaskStatus(status);
    loadTasks({ status: taskStatus });

    toggleModal();
  };

  const renderRightHeaderIcon = () => (
    <MaterialCommunityIcons
      name="filter-variant"
      size={25}
      color={colors.white}
      onPress={toggleModal}
    />
  );

  useEffect(() => {
    // Set Right header button
    navigation.setOptions({
      headerRight: () => renderRightHeaderIcon(),
    });

    // Load Tasks
    loadTasks({ status: taskStatus });
  }, [navigation, taskStatus]);

  return (
    <Fragment>
      <AppActivityIndicator visible={loading} />
      <AppScreen style={styles.screen}>
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

        <FilterTaskModal onSubmit={handleSubmit} currentStatus={taskStatus} />
      </AppScreen>
    </Fragment>
  );
};

TasksScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setOptions: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
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
  title: {
    fontWeight: 800,
    fontSize: 18,
    marginBottom: 5,
    color: colors.primary,
  },
  price: {
    fontWeight: 400,
    fontSize: 16,
    color: colors.secondary,
  },
  status: {
    paddingHorizontal: 8,
    paddingVertical: 2.5,
    borderRadius: 5,
    fontSize: 12,
    backgroundColor: colors.primary,
    color: colors.white,
    fontWeight: 800,
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
    fontSize: 14,
    fontWeight: 500,
  },
  date: {
    fontSize: 12,
    fontWeight: 500,
  },
});

export default TasksScreen;
