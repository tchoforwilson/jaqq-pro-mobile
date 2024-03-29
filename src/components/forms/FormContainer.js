import React, { Fragment } from "react";
import { Formik } from "formik";

/**
 *
 * @param {Object} initialValues Form initial values
 * @param {Object} validationSchema Form validation schema
 * @param {Function} onSubmit Form submission handler
 * @param {JSX} childrem Form container children
 * @returns
 */
const FormContainer = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  ...otherProps
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...otherProps}
    >
      {() => <Fragment>{children}</Fragment>}
    </Formik>
  );
};

export default FormContainer;
