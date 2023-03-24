import React, { useState } from "react";
import { PasswordForm } from "src/Components/SignUpPage";

const PasswordContainer: React.FC = () => {

  const [password, setPassword] = useState<string>("");
  const [passwordAgain, setPasswordAgain] = useState<string>("");

  return (
    <PasswordForm

    />
  )
}

export { PasswordContainer }