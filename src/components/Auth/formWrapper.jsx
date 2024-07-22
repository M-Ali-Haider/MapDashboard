import FormHeader from "./formHeader";
import FormHeading from "./formHeading";
import AuthHeader from "./Header";

const FormWrapper = ({ children }) => {
  return (
    <>
      <AuthHeader />
      <main className="w-full min-h-screen flex items-center justify-center px-4 py-12">
        <form className="max-w-[600px] w-full shadow-2xl md:shadow-xl flex flex-col gap-4 rounded-[40px] overflow-hidden">
          <FormHeader />
          <div className="p-8 flex flex-col">
            <FormHeading />
            {children}
          </div>
        </form>
      </main>
    </>
  );
};

export default FormWrapper;
