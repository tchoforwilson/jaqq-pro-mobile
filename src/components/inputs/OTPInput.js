import React, { useState, useRef, forwardRef } from "react";
import { View, StyleSheet } from "react-native";
import { CONST_FOURU, CONST_ONEU } from "../../constants";
import AppTextInput from "./AppTextInput";

const OTPInput = forwardRef(({ length = CONST_FOURU, onCodeFilled }, ref) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = Array(length)
    .fill(CONST_FOURU)
    .map((_, i) => useRef(null));

  const handleInputChange = (text, index) => {
    if (text.length === CONST_ONEU && index < length - CONST_ONEU) {
      inputRefs[index + CONST_ONEU].current.focus();
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Check if the OTP is fully filled
    const isOTPFilled = newOtp.every((digit) => digit !== "");
    if (isOTPFilled && onCodeFilled) {
      onCodeFilled(newOtp.join(""));
    }
  };

  return (
    <View style={styles.container} ref={ref}>
      {otp.map((digit, index) => (
        <AppTextInput
          key={index}
          ref={inputRefs[index]}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          value={digit}
          onChangeText={(text) => handleInputChange(text, index)}
        />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 5,
  },
});

export default OTPInput;
