import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";

import { FormContainer } from "../forms";
import FormCheckBox from "../forms/FormCheckBox";
import { SubmitButton } from "../buttons";
import AppModal from "./AppModal";
import { CONST_ZEROU } from "../../constants";
import { useApi, useAuth } from "../../hooks";
import userServices from "../../services/user.services";
import { AppActivityIndicator } from "../indicators";
import serviceServices from "../../services/service.services";

const validationSchema = Yup.object().shape({
  services: Yup.array().of(Yup.string().required()),
});

const UpdateServicesModal = ({ services }) => {
  const auth = useAuth();
  const [appServices, setAppServices] = useState([]);

  const appServicesApi = useApi(serviceServices.getAllServices);
  const updateServicesApi = useApi(userServices.toggleMyServices);

  const handleSubmit = async (values) => {
    const result = await updateServicesApi(values);
    if (result.ok) {
      auth.storeNewUser(updateServicesApi.data);
    }
  };

  const loadAppServices = async () => {
    const result = await appServicesApi();
    if (result.ok) {
      setAppServices(result.data.data);
    }
  };

  useEffect(() => {
    loadAppServices();
  }, []);

  return (
    <Fragment>
      <AppActivityIndicator
        visible={appServicesApi.label || updateServicesApi.loading}
      />
      <AppModal>
        <FormContainer
          initialValues={{
            services,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {appServices.map((service) => (
            <FormCheckBox
              key={service.id || service.id}
              label={service.title}
              name="services"
              value={service._id || service.id}
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
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default UpdateServicesModal;
