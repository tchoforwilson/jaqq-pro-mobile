import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import * as Yup from "yup";

import { FormContainer } from "../components/forms";
import FormCheckBox from "../components/forms/FormCheckBox";
import { SubmitButton } from "../components/buttons";
import colors from "../configurations/colors";
import rootFormik, { formikRef } from "../components/forms/rootFormik";

const validationSchema = Yup.object().shape({
  services: Yup.array().of(Yup.string().required()),
});

const UpdateServicesScreen = ({ modalVisible, services = [] }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="cross"
              size={24}
              color={colors.black}
            />
          </View>
          <View style={styles.modal}>
            <FormContainer
              initialValues={{
                services,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              innerRef={formikRef}
            >
              {services.map((service) => (
                <FormCheckBox
                  key={service.id}
                  label={service.label}
                  name="services"
                  value={service.id}
                />
              ))}
            </FormContainer>
          </View>
        </View>
      </Modal>
    </View>
  );
};

UpdateServicesScreen.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    backgroundColor: colors.white,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.black,
    marginBottom: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modal: {
    marginHorizontal: 24,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "left",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default UpdateServicesScreen;
