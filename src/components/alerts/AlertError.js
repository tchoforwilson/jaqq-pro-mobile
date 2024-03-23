import React from "react";
import { View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../configurations/colors";
import { AppText } from "../common";

/**
 *
 * @param {Boolean} visible Show or hide modal
 * @param {String} text Text to show on modal
 * @param {Function} callback to close the modal
 * @returns
 */
const AlertError = ({ visible, message, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.alertContainer}>
          <AppText style={styles.text}>{message}</AppText>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <AppText style={styles.buttonText}>Close</AppText>
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
  },
  alertContainer: {
    backgroundColor: colors.red,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: colors.white,
  },
  button: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.red,
    fontWeight: "bold",
  },
});

export default AlertError;
