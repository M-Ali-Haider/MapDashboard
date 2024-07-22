export default function CheckBox({
  label,
  labelClassName,
  inputClassName,
  container,
}) {
  return (
    <div className={`flex items-center ${container}`}>
      <input
        type="checkbox"
        id={label}
        className={`${inputClassName} peer relative shrink-0 appearance-none border-2 border-black after:absolute after:left-0 after:top-0 after:h-full after:w-full 
          checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDI1MjcgMy4yMDI3NkwzLjg0MzI4IDcuMzg0NzRMMS45NDIzOCA1LjQ4Mzg0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuMTQwNTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K')]
          after:bg-[length:10px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-black focus:outline-none
          `}
      />
      <label
        htmlFor={label}
        className={`${labelClassName} cursor-pointer font-medium text-[15px] md:text-base select-none`}
      >
        {label}
      </label>
    </div>
  );
}
