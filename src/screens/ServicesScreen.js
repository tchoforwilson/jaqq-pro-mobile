import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";

import { AppButton } from "../components/buttons";
import { AppScreen, AppText } from "../components/common";
import Icon from "../components/Icon";
import colors from "../configurations/colors";
import { UpdateServicesModal } from "../components/modals";
import { useApi } from "../hooks";
import userServices from "../services/user.services";
import { AppActivityIndicator } from "../components/indicators";

const ServiceItem = ({ service }) => {
  return (
    <TouchableHighlight underlayColor={colors.light}>
      <View style={styles.serviceItem}>
        <View style={styles.icon}>
          <Icon
            name="toolbox"
            size={40}
            iconColor={colors.white}
            backgroundColor={colors.primary}
          />
        </View>
        <View style={styles.detailsContainer}>
          <AppText style={styles.label} numberOfLines={1}>
            {service.label}
          </AppText>
          <AppText style={styles.subTitle}>{service.tasks + " Task"}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ServiceItem.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    tasks: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const ServicesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    data: services,
    error,
    loading,
    request: getMyServices,
  } = useApi(userServices.getMyServices);

  useEffect(() => {
    getMyServices();
  }, []);

  return (
    <Fragment>
      <AppActivityIndicator visible={loading} />
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          {error && (
            <Fragment>
              <AppText>Couldn't retrieve the services.</AppText>
              <AppButton title="Retry" onPress={getMyServices} />
            </Fragment>
          )}
          <FlatList
            style={styles.services}
            data={services}
            keyExtractor={(service) => service.id || service.label}
            renderItem={({ item }) => <ServiceItem service={item} />}
          />
          <Button
            style={{ flex: 0, alignSelf: "center", padding: "4" }}
            color={colors.grey_dark_1}
            title="Update services"
            onPress={() => setModalVisible(true)}
          />
        </View>
        <UpdateServicesModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(!modalVisible)}
          services={services}
        />
      </AppScreen>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  serviceItem: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    marginVertical: 7,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
  },
  subTitle: {
    color: colors.grey_dark_2,
    fontSize: 16,
  },
  label: {
    fontWeight: "500",
  },
  container: {},
  services: {
    borderRadius: 15,
    marginBottom: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default ServicesScreen;
