import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useValidateInput } from "src/Hooks/useValidateInput";
import { PATH } from "src/Constants/index";

const LoginPageContainer = () => {
  const navigate = useNavigate();
  const { validate } = useValidateInput();

  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const getLogin = async () => {
    try {
      validate();
      navigate(PATH.SETUP);
    } catch (e) {
      throw e;
    }
  }

  const getSignIn = () => {
    navigate(PATH.SIGN_IN);
  }

  return {
    getLogin,
    getSignIn,
    setUserId,
    setPassword,
    userId,
    password
  }
}

export { LoginPageContainer }