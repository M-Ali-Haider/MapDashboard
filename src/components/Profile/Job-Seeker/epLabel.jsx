const EPLabel = ({ label, type, placeholder, styles }) => {
  return (
    <>
      <div
        className={`${styles} flex flex-col gap-2 flex-1 mt-6 transition-all duration-300 ease-custom-ease`}
      >
        <label className="capitalize font-bold text-lg" htmlFor={label}>
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full border-b border-[#999999] border-solid placeholder:text-sm focus:outline-none"
        />
      </div>
    </>
  );
};

export default EPLabel;
