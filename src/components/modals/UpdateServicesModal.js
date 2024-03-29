import React, { Fragment, useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import * as Yup from "yup";

import { FormContainer } from "../forms";
import FormCheckBox from "../forms/FormCheckBox";
import AppModal from "./AppModal";
import { useApi, useAuth, useModal } from "../../hooks";
import userServices from "../../services/user.services";
import { AppActivityIndicator } from "../indicators";
import serviceServices from "../../services/service.services";
import { AppText } from "../common";

const validationSchema = Yup.object().shape({
  services: Yup.array().of(Yup.string().required()),
});

const UpdateServicesModal = ({ services }) => {
  const { toggleModal } = useModal();
  const auth = useAuth();
  const [appServices, setAppServices] = useState([]);

  const appServicesApi = useApi(serviceServices.getAllServices);
  const updateServicesApi = useApi(userServices.toggleMyServices);

  const handleSubmit = async (values) => {
    const result = await updateServicesApi.request(values);
    if (result.ok) {
      auth.storeNewUser(updateServicesApi.data);
    }
    console.log(values);
    toggleModal();
  };

  const loadAppServices = async () => {
    const result = await appServicesApi.request();
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
        visible={appServicesApi.loading || updateServicesApi.loading}
      />
      <AppModal>
        <AppText style={styles.heading}>Choose services</AppText>
        <FormContainer
          initialValues={{
            services,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FlatList
            data={appServices}
            keyExtractor={(item) => item.id || item._id}
            renderItem={({ item }) => (
              <FormCheckBox
                label={item.title}
                name="services"
                value={item._id || item.id}
              />
            )}
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
      title: PropTypes.string.isRequired,
    })
  ),
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default UpdateServicesModal;
