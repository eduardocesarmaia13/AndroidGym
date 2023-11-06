import { useState } from "react";
import { useAuthentication } from "../../../services/authentication";

export function useLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { mutateAsync: authentication, isLoading } = useAuthentication();

  const handleChangeEmail = (text) => {
    setForm({
      ...form,
      email: text,
    });
  };

  const handleChangePassword = (text) => {
    setForm({
      ...form,
      password: text,
    });
  };

  const handleSubmitAuth = () => {
    authentication(form);
  };

  console.log(isLoading)

  return {
    form,
    handleChangePassword,
    handleChangeEmail,
    handleSubmitAuth,
    isLoading
  };
}
