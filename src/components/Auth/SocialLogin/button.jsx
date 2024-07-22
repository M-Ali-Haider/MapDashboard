const SocialLoginButton = ({ logo, text }) => {
  return (
    <>
      <button className="w-full flex items-center justify-center border-[#EDEDED] border-2 border-solid py-[10px] rounded-xl gap-2">
        {logo}
        <span className="text-[#1A1C1E] font-medium text-sm md:text-base">
          {text}
        </span>
      </button>
    </>
  );
};

export default SocialLoginButton;
