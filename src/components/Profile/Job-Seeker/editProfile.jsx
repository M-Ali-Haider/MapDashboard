"use client";
import BoxWrapper from "@/components/Wrappers/boxWrapper";
import EditProfileButton from "./epButton";
import EditProfileForm from "./epForm";

const EditProfile = () => {
  const handleCancel = () => {
    console.log("You clicked the cancel button");
  };
  const handleSaveChanges = () => {
    console.log("You clicked the save changes button");
  };
  return (
    <>
      <BoxWrapper
        styles={"flex-1 transition-[width] duration-300 ease-custom-ease"}
      >
        <div className="flex justify-between flex-wrap">
          <h3 className="text-[28px] font-bold">Edit Profile</h3>
          <div className="flex items-end gap-3 mt-3">
            <EditProfileButton label={"cancel"} handleClick={handleCancel} />
            <EditProfileButton
              label={"save changes"}
              handleClick={handleSaveChanges}
            />
          </div>
        </div>
        <EditProfileForm />
      </BoxWrapper>
    </>
  );
};

export default EditProfile;
