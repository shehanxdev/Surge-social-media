import React from "react";
import { SignIn } from "@clerk/clerk-react";

function LoginForm() {
  return (
    <div>
      <SignIn />
    </div>
  );
}

export default LoginForm;
