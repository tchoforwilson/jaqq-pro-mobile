import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import { AppText } from "../common";
import colors from "../../configurations/colors";

const AppModal = ({ isVisible, onClose, children }) => {
  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <AppText style={styles.closeButtonText}>Close</AppText>
        </TouchableOpacity>
        <View style={styles.content}>{children}</View>
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
    paddingTop: Constants.statusBarHeight,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 48,
    borderRadius: 10,
    width: "90%",
    maxWidth: 400,
  },
});

export default AppModal;
