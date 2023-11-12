/* eslint-disable no-useless-escape */
import { useState } from "react";

export const useContact = () => {
  const [emailError, setEmailError] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isEmailValid = (email: string) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? true : false;

  const onTextChange = (name: string, value: string) => {
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const onEmailChange = (name: string, value: string) => {
    !isEmailValid(value) && value !== ""
      ? setEmailError(true)
      : setEmailError(false);
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = () => {
    if (
      isEmailValid(formFields.email) &&
      Object.values(formFields).some((field) => field.length !== 0)
    ) {
      console.log("form is ready");
    }
  };

  return { formFields, emailError, onTextChange, onEmailChange, submitForm };
};
