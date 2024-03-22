import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { useAuth } from "../hooks";
import { AppScreen } from "../components/common";
import routes from "../routes";
import colors from "../configurations/colors";
import { ListItem } from "../components/lists";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "My Services",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.SERVICES,
  },
  {
    title: "Change Phone Number",
    icon: {
      name: "phone",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.UPDATE_PHONE,
  },
  {
    title: "Change Password",
    icon: {
      name: "lock",
      backgroundColor: colors.grey_dark_1,
    },
    targetScreen: routes.UPDATE_PASSWORD,
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();

  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.firstname + " " + user.lastname}
          subTitle={user.email}
          image={require("../assets/profile.jpg")}
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
        title="LogOut"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
    </AppScreen>
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
