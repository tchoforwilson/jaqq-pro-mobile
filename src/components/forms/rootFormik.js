import React from "react";

export const formikRef = React.createRef();

const handleSubmit = () => {
  formikRef.current?.submitForm();
};

export default {
  handleSubmit,
};
