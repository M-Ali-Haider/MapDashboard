import FormCheckbox from "../formCheckbox";
import FormFooter from "../formFooter";
import FormWrapper from "../formWrapper";
import AuthLabel from "../labels/AuthLabel";
import PasswordLabel from "../labels/PasswordLabel";
import SignInButton from "../signInButton";

const AdminRegister = () => {
  return (
    <>
      <FormWrapper>
        <FormCheckbox />
        <div className="mt-2 w-full flex flex-col gap-4">
          <AuthLabel
            label={"User Name"}
            placeholder={"Enter your Name"}
            type={"text"}
          />
          <AuthLabel
            label={"Email Address"}
            placeholder={"Enter your email..."}
            type={"text"}
          />
          <PasswordLabel
            label={"password"}
            placeholder={"Enter your password..."}
          />
          <PasswordLabel
            label={"Re-Enter Password"}
            placeholder={"Re-Enter your password..."}
          />
        </div>
        <SignInButton />
        <FormFooter
          href={"/login"}
          text={"Already have an account?"}
          hrefName={"Login"}
        />
      </FormWrapper>
    </>
  );
};

export default AdminRegister;
