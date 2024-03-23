import React, { Fragment } from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";

import { FormContainer } from "../forms";
import FormCheckBox from "../forms/FormCheckBox";
import { SubmitButton } from "../buttons";
import AppModal from "./AppModal";
import { CONST_ZEROU } from "../../constants";
import { useApi } from "../../hooks";
import userServices from "../../services/user.services";
import { AppActivityIndicator } from "../indicators";

const validationSchema = Yup.object().shape({
  services: Yup.array().of(Yup.string().required()),
});

const UpdateServicesModal = ({ isVisible, onClose, services }) => {
  const { loading, request: updateMyServices } = useApi(
    userServices.toggleMyServices
  );

  const handleSubmit = (values) => {
    updateMyServices(values);
  };
  return (
    <Fragment>
      <AppActivityIndicator visible={loading} />
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
          <SubmitButton
            title={
              services.length === CONST_ZEROU
                ? "add service"
                : "update services"
            }
          />
        </FormContainer>
      </AppModal>
    </Fragment>
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
