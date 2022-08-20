import { LoginForm } from "components/auth/login/LoginForm";
import useRedux from "hooks/useRedux";
import { loginUserAsync } from "store/auth";

const Login = () => {
  const [_, dispatch] = useRedux();

  const onSubmit = (values, formik) => {
    dispatch(loginUserAsync(values, formik));
  };

  return <LoginForm onSubmit={onSubmit} />;
};

export default Login;
