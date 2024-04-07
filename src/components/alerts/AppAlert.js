import React from "react";
import { View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../configurations/colors";
import { AppText } from "../common";

const AlertIcon = (status) => {
  let icon = "alert-outline";
  switch (status) {
    case "error":
    case "fail":
      icon = "alert-outline";
      break;
    case "success":
      icon = "check";
      break;
    case "warning":
      icon = "alert-octagon-outline";
      break;
    default:
      icon = "alert-outline";
  }
  return icon;
};

/**
 * @breif Toggle modal items color base on status
 * @param {String} status
 * @returns
 */
const AlertColor = (status) => {
  let color = colors.red;
  switch (status) {
    case "error" || "fail":
      color = colors.red;
      break;
    case "success":
      color = colors.secondary;
      break;
    case "warning":
      color = colors.yellow;
      break;
    default:
      color = colors.red;
  }
  return color;
};

/**
 *
 * @param {Object} alert Show alert with title and message
 * @param {Function} callback to close/open the modal
 * @returns
 */
const AppAlert = ({ alert, onClose }) => {
  return (
    <Modal
      visible={alert.visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.alertContainer}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: AlertColor(alert.status) },
            ]}
          >
            <MaterialCommunityIcons
              name={AlertIcon(alert.status)}
              size={40}
              color={colors.white}
            />
          </View>
          <AppText style={styles.status}>{alert.status}</AppText>
          <AppText style={styles.message}>{alert.message}</AppText>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: AlertColor(alert.status) },
            ]}
            onPress={onClose}
          >
            <AppText style={styles.buttonText}>Close</AppText>

            <MaterialCommunityIcons
              name="logout"
              color={colors.white}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 24,
  },
  alertContainer: {
    width: "100%",
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 10,
    alignItems: "center",
  },
  iconContainer: {
    padding: 5,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 800,
    textAlign: "center",
    marginVertical: 10,
    textTransform: "capitalize",
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: colors.black,
    marginVertical: 15,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  buttonText: {
    color: colors.white,
  },
});

export default AppAlert;
