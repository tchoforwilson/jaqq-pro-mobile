import { useFormikContext } from "formik";
import React, { useState } from "react";
import { View, StyleSheet, Pressable, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import FormErrorMessage from "./FormErrorMessage";
import colors from "../../configurations/colors";
import { AppText } from "../common";

const FormDateTimePicker = ({ name, iconType }) => {
  const [showPicker, setShowPicker] = useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      if (Platform.OS === "android") {
        togglePicker();
        setFieldValue(name, currentDate);
      }
    } else {
      togglePicker();
    }
  };

  const { errors, touched, values, setFieldValue } = useFormikContext();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconType}
        size={32}
        color={colors.grey_dark_1}
      />
      {!showPicker && (
        <Pressable onPress={togglePicker}>
          <AppText style={styles.text}>
            {new Date(values[name]).toLocaleDateString() || "Birthday"}
          </AppText>
        </Pressable>
      )}
      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          placeholder="Birthday"
          maximumDate={new Date()}
          value={new Date(values[name])}
          onChange={handleChange}
          style={styles.datepicker}
        />
      )}
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderColor: colors.grey_dark_3,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 15,
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  datepicker: {
    width: "95%",
    height: "100%",
  },
  text: {
    fontSize: 18,
  },
});

export default FormDateTimePicker;
