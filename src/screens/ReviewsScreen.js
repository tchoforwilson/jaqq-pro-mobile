import React, { Fragment } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { AppScreen, AppText } from "../components/common";
import { useDate } from "../hooks";
import routes from "../routes";
import { AppActivityIndicator } from "../components/indicators";
import colors from "../configurations/colors";
import getRatingDescription from "../utility/ratingDescription";
import { Rating } from "react-native-ratings";

const Review = ({ review, onPress }) => {
  const { getElapsedTime } = useDate();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.reviewContainer}>
        <View style={styles.reviewDetails}>
          <View style={styles.reviewInfo}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={review.provider.photo}
            />
            <View>
              <AppText style={styles.name}>
                {review.provider.firstname + " " + review.provider.lastname}
              </AppText>
              <AppText style={styles.day}>
                {getElapsedTime(review.provider.createdAt)}
              </AppText>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <AppText style={styles.rating}>
              {getRatingDescription(review.rating)} ({review.rating})
            </AppText>
            <Rating
              startingValue={review.rating}
              type="star"
              ratingCount={5}
              imageSize={16}
              isDisabled={true}
            />
          </View>
        </View>
        <AppText style={styles.message}>{review.content}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const reviews = [
  {
    _id: "1",
    rating: "4.5",
    content:
      "Very good services. The rooms are clean and spacious and beautiful. Service Quality is Excellent ",
    createdAt: "12/04/2024",
    provider: {
      firstname: "Mary",
      lastname: "Smith",
      phone: "+237678901389",
      photo: require("../assets/profile.jpg"),
    },
    task: {
      service: {
        title: "Home Teacher",
      },
    },
  },
  {
    _id: "2",
    rating: "4",
    content:
      "Very good services. The rooms are clean and spacious and beautiful. Service Quality is Excellent ",
    createdAt: "12/03/2024",
    provider: {
      firstname: "John",
      lastname: "Brown",
      phone: "+237670001389",
      photo: require("../assets/profile.jpg"),
    },
    task: {
      service: {
        title: "Dentist",
      },
    },
  },
  {
    _id: "3",
    rating: "3.5",
    content:
      "Very good services. The rooms are clean and spacious and beautiful. Service Quality is Excellent ",
    createdAt: "12/01/2024",
    provider: {
      firstname: "Manga",
      lastname: "williams",
      phone: "+237671901389",
      photo: require("../assets/profile.jpg"),
    },
    task: {
      service: {
        title: "Doctor",
      },
    },
  },
  {
    _id: "4",
    rating: "3",
    content:
      "Very good services. The rooms are clean and spacious and beautiful. Service Quality is Excellent ",
    createdAt: "12/01/2024",
    provider: {
      firstname: "Andy",
      lastname: "Richards",
      phone: "+237678901009",
      photo: require("../assets/profile.jpg"),
    },
    task: {
      service: {
        title: "Nurse",
      },
    },
  },
];

const ReviewsScreen = ({ navigation }) => {
  return (
    <Fragment>
      <AppActivityIndicator visible={false} />
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={reviews}
            keyExtractor={(review) => review._id}
            renderItem={({ item }) => (
              <Review
                review={item}
                onPress={() => navigation.navigate(routes.REVIEW_DETAILS, item)}
              />
            )}
          />
        </View>
      </AppScreen>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
  },
  container: {
    marginTop: 25,
  },
  reviewContainer: {
    paddingVertical: 20,
    width: "100%",
    borderTopWidth: 1,
    borderColor: colors.grey_dark_2,
  },
  reviewDetails: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reviewInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  name: {
    fontSize: 16,
    fontWeight: 700,
  },
  day: {
    fontSize: 16,
    fontWeight: 300,
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  rating: {
    fontSize: 16,
    fontWeight: 400,
  },
  message: {
    fontSize: 16,
  },
});

export default ReviewsScreen;
