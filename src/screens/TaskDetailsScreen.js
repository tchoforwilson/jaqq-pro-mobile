import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

import { AppScreen, AppText } from "../components/common";
import colors from "../configurations/colors";
import socket from "../services/socket";

const items = [
  {
    value: "1",
    label: "Selected status",
  },
  {
    value: "Accepted",
    label: "Accepted",
  },
  {
    value: "In progress",
    label: "In progress",
  },
  {
    value: "Ready",
    label: "Ready",
  },
  {
    value: "Rejected",
    label: "Rejected",
  },
];

const TaskDetailsScreen = ({ route }) => {
  const [task, setTask] = useState(route.params);
  const [status, setStatus] = useState(task.status);

  const handleChange = (value) => {
    setStatus(value);
    socket.emit("task:status", {
      taskId: task.id,
      status: value,
    });
    socket.on("task:updated", (data) => {
      console.log(data);
      setTask(data);
    });
  };

  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.name}>{task.service.title}</AppText>
          <AppText style={styles.price}>
            {task.pricing.minPrice + " XAF"}
          </AppText>
        </View>
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons
            name="map-marker"
            size={25}
            color={colors.white}
            style={styles.icon}
          />
          <AppText style={styles.location}>{task.location.name}</AppText>
        </View>
        <View style={styles.userContainer}>
          <Image style={styles.userimage} source={{ uri: task.user.photo }} />
          <View style={styles.userDetails}>
            <AppText style={styles.username} numberOfLines={1}>
              {task.user.firstname + " " + task.user.lastname}
            </AppText>
            <AppText style={styles.userphone}>{task.user.phone}</AppText>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <AppText style={styles.status}>{status}</AppText>
          <Picker
            selectedValue={status}
            onValueChange={(value) => handleChange(value)}
            style={styles.picker}
          >
            {items.map((item) => {
              return (
                <Picker.Item
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              );
            })}
          </Picker>
        </View>
      </View>
    </AppScreen>
  );
};

TaskDetailsScreen.propTypes = {
  route: PropTypes.object.isRequired,
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
  statusContainer: {},
  status: {
    width: "100%",
    backgroundColor: colors.primary,
    color: colors.white,
    fontWeight: 800,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});

export default TaskDetailsScreen;
