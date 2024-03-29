import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../configurations/colors";
import FormErrorMessage from "./FormErrorMessage";

const FormPicker = ({ name, items = [], iconType }) => {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconType}
        size={32}
        color={colors.grey_dark_1}
      />
      <Picker
        selectedValue={values[name]}
        onValueChange={(value) => setFieldValue(name, value)}
        style={styles.picker}
      >
        {items.map((item) => (
          <Picker.Item key={item.label} label={item.label} value={item.value} />
        ))}
      </Picker>
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

FormPicker.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  iconType: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderColor: colors.grey_dark_3,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  picker: {
    width: "95%",
    height: "100%",
  },
});

export default FormPicker;
