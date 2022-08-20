import { SignUpForm } from "components/auth/signup/SignUpForm";
import useRedux from "hooks/useRedux";
import { signUpUserAsync } from "store/auth";

const SignUp = () => {
  const [_, dispatch] = useRedux();

  const onSubmit = (values, formik) => {
    dispatch(signUpUserAsync(values, formik));
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
