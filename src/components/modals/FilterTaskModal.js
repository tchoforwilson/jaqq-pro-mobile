import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppText } from "../common";
import { FormContainer, FormRadioGroup } from "../forms";
import AppModal from "./AppModal";
import { formikRef } from "../forms/rootFormik";

const validationSchema = Yup.object().shape({
  status: Yup.string().label("status"),
});

const tasks = [
  { label: "All tasks", value: "none" },
  { label: "Pending tasks", value: "Pending" },
  { label: "Assigned tasks", value: "Assigned" },
  { label: "In progress tasks", value: "In progress" },
  { label: "Ready tasks", value: "Ready" },
  { label: "Completed tasks", value: "Completed" },
  { label: "Rejected tasks", value: "Rejected" },
  { label: "Cancelled tasks", value: "Cancelled" },
];

const FilterTaskModal = ({ onSubmit, currentStatus }) => {
  return (
    <AppModal>
      <View style={styles.container}>
        <AppText style={styles.heading}>Filter tasks</AppText>
        <FormContainer
          initialValues={{ status: currentStatus }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          innerRef={formikRef}
        >
          <FormRadioGroup items={tasks} name="status" />
        </FormContainer>
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
    marginTop: 20,
  },
  btntext: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  container: {
    borderRadius: 30,
  },
  heading: {
    fontWeight: 700,
    marginBottom: 15,
  },
});

export default FilterTaskModal;
