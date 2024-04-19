import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppText } from "../common";
import { useModal } from "../../hooks";
import colors from "../../configurations/colors";

const TaskScreenHeader = () => {
  const { toggleModal } = useModal();
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Tasks</AppText>
      <MaterialCommunityIcons
        name="sort"
        size={28}
        color={colors.white}
        onPress={toggleModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: colors.white,
  },
});

export default TaskScreenHeader;
