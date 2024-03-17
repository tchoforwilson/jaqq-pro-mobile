import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import * as Yup from "yup";

import { FormContainer } from "../forms";
import FormCheckBox from "../forms/FormCheckBox";
import { SubmitButton } from "../buttons";
import AppModal from "./AppModal";

const validationSchema = Yup.object().shape({
  services: Yup.array().of(Yup.string().required()),
});

const UpdateServicesModal = ({ isVisible, onClose, services }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <AppModal isVisible={isVisible} onClose={onClose}>
      <FormContainer
        initialValues={{
          services: ["1", "3"],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {services.map((service) => (
          <FormCheckBox
            key={service.id}
            label={service.label}
            name="services"
            value={service.id}
          />
        ))}
        <SubmitButton title="Update services" />
      </FormContainer>
    </AppModal>
  );
};

UpdateServicesModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default UpdateServicesModal;
