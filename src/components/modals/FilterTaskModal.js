import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import * as Yup from "yup";

import { AppText } from "../common";
import { FormCheckbox, FormContainer } from "../forms";
import AppModal from "./AppModal";

const validationSchema = Yup.object().shape({
  status: Yup.string(),
});

const FilterButton = ({ title, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <AppText style={styles.btntext}>{title}</AppText>
    </TouchableHighlight>
  );
};

const tasks = [
  { label: "All tasks", value: "none" },
  { label: "Pending tasks", value: "pending" },
  { label: "Completed tasks", value: "completed" },
  { label: "Rejected tasks", value: "rejected" },
  { label: "In progress tasks", value: "progress" },
];

const FilterTaskModal = ({ isVisible, onClose, onSubmit }) => {
  return (
    <AppModal isVisible={isVisible} onClose={onClose}>
      <View style={styles.container}>
        <AppText>Filter tasks</AppText>
        <FormContainer
          initialValues={{ status: "none" }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {tasks.map((task) => (
            <FormCheckbox label={task.label} name="status" value={task.value} />
          ))}
        </FormContainer>

        <View style={styles.buttons}>
          <FilterButton title="cancel" onClose={onClose} />
          <FilterButton title="ok" onClose={onClose} />
        </View>
      </View>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});

export default FilterTaskModal;
