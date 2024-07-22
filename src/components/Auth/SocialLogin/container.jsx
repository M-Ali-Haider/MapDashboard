import FacebookSVG from "@/assets/facebookSVG";
import GoogleSVG from "@/assets/GoogleSVG";
import SocialLoginButton from "./button";
import OR from "./or";

const SocialLoginContainer = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center max-w-[340px]">
          <OR />
          <div className="w-full flex flex-col items-center gap-3">
            <SocialLoginButton
              logo={<GoogleSVG />}
              text={"Sign in with Google"}
            />
            <SocialLoginButton
              logo={<FacebookSVG />}
              text={"Sign in with Facebook"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialLoginContainer;
