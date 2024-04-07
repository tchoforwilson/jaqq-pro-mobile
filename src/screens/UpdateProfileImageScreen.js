import React, { Fragment, useEffect, useState } from "react";
import { Alert, Button, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { AppScreen } from "../components/common";
import colors from "../configurations/colors";
import { AppButton } from "../components/buttons";
import { AppActivityIndicator } from "../components/indicators";
import { useApi, useAuth, useAlert } from "../hooks";
import userServices from "../services/user.services";

const UpdateProfileImageScreen = () => {
  const { setAlert } = useAlert();
  const { user, storeNewUser } = useAuth();
  const [imageUri, setImageUri] = useState(user.photo || "");

  const { loading, request: updateImageApi } = useApi(
    userServices.updateMyPhoto
  );

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) Alert("You need to enable permission to access the Library.");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading an image: " + error);
    }
  };

  const handleSubmit = async () => {
    if (!imageUri) {
      Alert.alert("Please select an image!");
      return;
    }
    const formData = new FormData();
    formData.append("photo", {
      uri: imageUri,
      name: "profile-image",
      type: "image/jpeg",
    });

    const result = await updateImageApi(formData);
    if (result.ok) {
      storeNewUser(result.data.data);
      const { status, message } = result.data;
      setAlert({ status, message, visible: true });
      return;
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Fragment>
      <AppActivityIndicator visible={loading} />
      <AppScreen style={styles.screen}>
        <Button
          color={colors.grey_dark_1}
          title="Click to select image"
          onPress={selectImage}
          style={{ textTransform: "capitalize" }}
        />
        {!imageUri ? (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.black}
          />
        ) : (
          <Image style={styles.image} source={{ uri: imageUri }} />
        )}
        <AppButton title="Save image" onPress={handleSubmit} />
      </AppScreen>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: colors.light,
    flexDirection: "column",
    justifyContent: "start",
    gap: 20,
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
    overflow: "hidden",
  },
});

export default UpdateProfileImageScreen;
