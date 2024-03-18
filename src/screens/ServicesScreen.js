import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";
import { AppScreen, AppText } from "../components/common";
import Icon from "../components/Icon";
import colors from "../configurations/colors";
import { UpdateServicesModal } from "../components/modals";

const services = [
  {
    id: "1",
    label: "Wedding Photographer",
    tasks: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "2",
    label: "Carpenter",
    tasks: 11,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "3",
    label: "Builder",
    tasks: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "4",
    label: "Painter",
    tasks: 25,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "5",
    label: "Driving",
    tasks: 16,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

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
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
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
