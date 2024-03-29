import React from "react";
import { View, StyleSheet, Modal, Pressable } from "react-native";
import Constants from "expo-constants";
import { AppText } from "../common";
import colors from "../../configurations/colors";
import { useModal } from "../../hooks";
import rootFormik from "../forms/rootFormik";

const PressButton = ({ title, onPress }) => {
  return (
    <Pressable
      style={styles.button}
      pressedStyle={({ pressed }) => [
        { backgroundColor: pressed ? "rgb(210, 230, 255)" : "white" },
      ]}
      onPress={onPress}
    >
      <AppText style={styles.buttontext}>{title}</AppText>
    </Pressable>
  );
};

const AppModal = ({ children }) => {
  const { modalVisible, toggleModal } = useModal();

  return (
    <Modal visible={modalVisible} transparent animationType="slide">
      <View style={styles.container}>
        <View style={styles.content}>
          {children}
          <View style={styles.buttonGroup}>
            <PressButton title="Cancel" onPress={toggleModal} />
            <PressButton title="Ok" onPress={rootFormik.handleSubmit} />
          </View>
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
    paddingTop: Constants.statusBarHeight,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  buttontext: {
    fontSize: 18,
    fontWeight: 700,
  },
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 25,
    paddingVertical: 48,
    borderRadius: 10,
    width: "90%",
    maxWidth: 400,
  },
});

export default AppModal;
