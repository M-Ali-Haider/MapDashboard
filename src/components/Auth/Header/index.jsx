import AuthHeaderSVG from "@/assets/AuthHeaderSVG";

const AuthHeader = () => {
  return (
    <>
      <header className="h-16 bg-[#1A1C1E] w-full flex md:hidden items-center justify-center">
        <AuthHeaderSVG width={"299px"} height={"58px"} />
      </header>
    </>
  );
};

export default AuthHeader;
