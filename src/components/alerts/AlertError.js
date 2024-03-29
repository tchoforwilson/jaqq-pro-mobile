import React from "react";
import { View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../configurations/colors";
import { AppText } from "../common";

/**
 *
 * @param {Boolean} visible Show or hide modal
 * @param {String} text Text to show on modal
 * @param {Function} callback to close the modal
 * @returns
 */
const AlertError = ({ visible, status, message, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.alertContainer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="close"
              size={40}
              color={colors.white}
            />
          </View>
          <AppText style={styles.status}>{status}</AppText>
          <AppText style={styles.message}>{message}</AppText>
          <TouchableOpacity style={styles.button} onPress={onClose}>
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
    backgroundColor: colors.red,
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
    backgroundColor: colors.red,
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

export default AlertError;
