import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFormikContext } from "formik";
import { AppText } from "../common";
import colors from "../../configurations/colors";

/**
 * @breif Render a form submit button
 * @param {String} title Submit button title
 * @returns {JSX}
 */
const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableOpacity style={{ width: "100%" }} onPress={handleSubmit}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[
          "rgba(75,70,249,0.8)",
          "rgba(75,70,249,.9)",
          "rgba(75,70,249,1)",
        ]}
        style={styles.container}
      >
        <AppText style={styles.text}>{title}</AppText>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "rgba(0,0,0,0.19)",
    shadowOffset: "0 0 3",
  },
  text: {
    color: colors.white,
    textTransform: "capitalize",
    fontWeight: "600",
  },
});

export default SubmitButton;
