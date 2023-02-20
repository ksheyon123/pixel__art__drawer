import { useState } from "react";
import { useValidateInput } from "src/Hooks/useValidateInput";

const LoginPageContainer = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { validate } = useValidateInput();

  const getLogin = async () => {
    try {
      validate();
    } catch (e) {
      throw e;
    }
  }

  return {
    getLogin,
    setUserId,
    setPassword,
    userId,
    password
  }
}

export { LoginPageContainer }