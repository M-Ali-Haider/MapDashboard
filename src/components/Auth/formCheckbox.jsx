import CheckBox from "../Checkbox";

const FormCheckbox = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-start mb-4 mt-3 gap-1 md:gap-0">
        <CheckBox
          label={"As Trainer"}
          labelClassName={""}
          inputClassName={"h-4 w-4 rounded-[4px]"}
          container={"gap-3"}
        />
        <CheckBox
          label={"As Instructor"}
          labelClassName={""}
          inputClassName={"h-4 w-4 rounded-[4px]"}
          container={"gap-3"}
        />
      </div>
    </>
  );
};

export default FormCheckbox;
