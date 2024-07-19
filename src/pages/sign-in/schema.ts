import * as yup from "yup";

export interface ISignInForm {
  username: string;
  password: string;
  confirmPassword: string;
  name?: string;
}

export const DEFAULT_SIGN_IN_FORM: ISignInForm = {
  username: "",
  password: "",
  confirmPassword: "",
  name: "",
};

export const formSchema: yup.Lazy<ISignInForm> = yup.lazy(() =>
  yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm Password is required"),
  }),
);
