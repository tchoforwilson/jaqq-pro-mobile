import React, { useState } from "react";
import { Button, View, StyleSheet, FlatList } from "react-native";
import { AppScreen } from "../components/common";
import Icon from "../components/Icon";
import { ListItem } from "../components/lists";
import colors from "../configurations/colors";
import { UpdateServicesModal } from "../components/modals";

const services = [
  {
    id: "1",
    label: "Wedding Photographer",
    numProviders: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "2",
    label: "Carpenter",
    numProviders: 11,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "3",
    label: "Builder",
    numProviders: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "4",
    label: "Painter",
    numProviders: 25,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "5",
    label: "Driving",
    numProviders: 16,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const ServicesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          style={styles.services}
          data={services}
          keyExtractor={(service) => service.id || service.label}
          renderItem={({ item }) => (
            <ListItem
              title={item.label}
              subTitle={item.numProviders + " Tasks"}
              IconComponent={
                <Icon
                  name="toolbox"
                  size={32}
                  iconColor={colors.white}
                  backgroundColor={colors.primary}
                />
              }
            />
          )}
        />
        <Button
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
