import FormCheckbox from "../formCheckbox";
import FormFooter from "../formFooter";
import FormWrapper from "../formWrapper";
import AuthLabel from "../labels/AuthLabel";
import PasswordLabel from "../labels/PasswordLabel";
import RememberAndForget from "../RememberAndForget";
import SignInButton from "../signInButton";
import SocialLoginContainer from "../SocialLogin/container";

const AdminLogin = () => {
  return (
    <>
      <FormWrapper>
        <FormCheckbox />
        <div className="mt-2 w-full flex flex-col gap-4">
          <AuthLabel
            label={"Email Address"}
            placeholder={"Enter your email..."}
            type={"text"}
          />
          <PasswordLabel
            label={"password"}
            placeholder={"Enter your password..."}
          />
        </div>
        <RememberAndForget />
        <SignInButton />
        <SocialLoginContainer />
        <FormFooter
          href={"/register"}
          text={"Don't have an account?"}
          hrefName={"Sign Up"}
        />
      </FormWrapper>
    </>
  );
};

export default AdminLogin;
