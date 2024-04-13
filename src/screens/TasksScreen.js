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
    service: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
  onPress: PropTypes.func.isRequired,
};

const TasksScreen = ({ navigation }) => {
  const [taskStatus, setTaskStatus] = useState("none");
  const { toggleModal } = useModal();
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

  useEffect(() => {
    loadTasks({ status: taskStatus });
  }, [taskStatus]);

  return (
    <Fragment>
      <AppActivityIndicator visible={loading} />
      <AppScreen style={styles.screen}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="sort"
            size={28}
            color={colors.grey_dark_1}
            onPress={toggleModal}
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

        <FilterTaskModal onSubmit={handleSubmit} currentStatus={taskStatus} />
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
