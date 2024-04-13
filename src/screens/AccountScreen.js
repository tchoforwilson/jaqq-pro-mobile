import React, { Fragment } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { useAuth } from "../hooks";
import { AppScreen } from "../components/common";
import routes from "../routes";
import colors from "../configurations/colors";
import { ListItem } from "../components/lists";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "Services",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.SERVICES,
  },
  {
    title: "Reviews",
    icon: {
      name: "star",
      backgroundColor: colors.yellow,
    },
    targetScreen: routes.REVIEWS,
  },
  {
    title: "Change number",
    icon: {
      name: "phone",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.UPDATE_PHONE,
  },
  {
    title: "Change password",
    icon: {
      name: "lock",
      backgroundColor: colors.grey_dark_1,
    },
    targetScreen: routes.UPDATE_PASSWORD,
  },
];

const AccountScreen = ({ navigation }) => {
  const { logOut, user } = useAuth();

  return (
    <Fragment>
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <ListItem
            title={user.firstname + " " + user.lastname}
            subTitle={user.email}
            image={{ uri: user.photo }}
            onPress={() => navigation.navigate(routes.PROFILE)}
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            )}
          />
        </View>
        <ListItem
          title="Log out"
          IconComponent={<Icon name="logout" backgroundColor={colors.red} />}
          onPress={() => logOut()}
        />
      </AppScreen>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
