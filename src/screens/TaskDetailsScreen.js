import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppScreen, AppText } from "../components/common";
import colors from "../configurations/colors";
import { Fragment } from "react";
import { AppActivityIndicator } from "../components/indicators";
import { useApi } from "../hooks";
import tasksServices from "../services/tasks.services";
import { useState } from "react";
import { useEffect } from "react";

const TaskDetailsScreen = ({ route }) => {
  const [task, setTask] = useState();
  const {
    loading,
    data,
    request: getTaskApi,
  } = useApi(tasksServices.getTaskById);
  const taskId = route.params;
  const loadTask = async () => {
    const result = await getTaskApi(taskId);
    if (result.ok) {
      setTask(data);
    }
  };

  useEffect(() => {
    loadTask();
  }, []);

  return (
    <Fragment>
      <AppActivityIndicator visible={loading} />
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.detailsContainer}>
            <AppText style={styles.name}>{task.name}</AppText>
            <AppText style={styles.price}>{task.price + " XAF"}</AppText>
          </View>
          <View style={styles.locationContainer}>
            <MaterialCommunityIcons
              name="map-marker"
              size={25}
              color={colors.white}
              style={styles.icon}
            />
            <AppText style={styles.location}>{task.location}</AppText>
          </View>
          <View style={styles.userContainer}>
            <Image
              style={styles.userimage}
              source={require("../assets/profile.jpg")}
            />
            <View style={styles.userDetails}>
              <AppText style={styles.username} numberOfLines={1}>
                {task.user.name}
              </AppText>
              <AppText style={styles.userphone}>{task.user.phone}</AppText>
            </View>
          </View>
        </View>
      </AppScreen>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    backgroundColor: colors.secondary,
    padding: 20,
  },
  detailsContainer: {
    marginBottom: 15,
  },
  icon: {
    color: colors.white,
  },
  locationContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-start",
  },
  location: {
    color: colors.grey_dark_1,
  },
  userContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 40,
    gap: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
  },
  userimage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userDetails: {
    flex: 1,
    justifyContent: "center",
  },
  username: {
    fontWeight: "500",
  },
  userphone: {
    fontSize: 16,
    color: colors.grey_dark_2,
  },
  name: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 800,
  },
  price: {
    color: colors.white,
    marginBottom: 7,
  },
});

export default TaskDetailsScreen;
