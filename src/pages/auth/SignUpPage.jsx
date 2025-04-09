import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as userService from "services/user";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        <div className="text-red-700 font-lato">{error}</div>
        <AuthForm
          fields={[
            {
              label: "username",
              type: "text",
            },
            {
              label: "password",
              type: "password",
            },
            {
              label: "confirm password",
              type: "password",
            },
          ]}
          submitButtonLabel="Create Account"
          onSubmit={async values => {
            if (values.username.length < 4) {
              setError("Username is too short");
              return;
            }
            if (values.password.length < 4) {
              setError("Password is too short");
              return;
            }
            if (values.password !== values["confirm password"]) {
              setError("Passwords do not match");
              return;
            }
            const response = await userService.createUser({
              username: values.username,
              password: values.password,
            });
            if (response.status === 201) {
              setError("");
              navigate("/", {
                state: {
                  accountCreated: true,
                },
              });
            } else {
              const data = await response.json();
              setError(data.error);
            }
          }}
        />
        <Link to="/" className="text-green-600 underline">
          Sign In
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};
export default SignUpPage;
