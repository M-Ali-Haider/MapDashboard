const EditProfileButton = ({ label, handleClick }) => {
  return (
    <>
      <button
        onClick={() => handleClick}
        className="text-white capitalize py-[6px] px-6 font-medium bg-[#89A0FF] rounded-full"
      >
        {label}
      </button>
    </>
  );
};

export default EditProfileButton;
