const FormHeading = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl md:text-3xl">
          Sign In Into Your Account
        </h1>
        <span className="text-[#606060] text-sm md:text-base">
          Please enter the details to sign in.
        </span>
      </div>
    </>
  );
};

export default FormHeading;
