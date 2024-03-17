import React from "react";
import { View, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../configurations/colors";

const ImageInput = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons
          color={colors.primary}
          name="camera"
          size={40}
        />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

ImageInput.propTypes = {
  imageUri: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    overflow: "hidden",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
