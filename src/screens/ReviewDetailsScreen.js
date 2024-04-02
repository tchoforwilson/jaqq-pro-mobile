import React from "react";
import { View, StyleSheet } from "react-native";
import { AppScreen, AppText } from "../components/common";
import { ListItem } from "../components/lists";

const ReviewDetailsScreen = ({ route }) => {
  const review = route.params;
  return (
    <AppScreen>
      <View style={styles.container}>
        <AppText>{review.content}</AppText>
      </View>
      <ListItem
        title={review.provider.firstname + "" + review.provider.lastname}
        subTitle={review.provider.phone}
        image={review.provider.photo}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ReviewDetailsScreen;
