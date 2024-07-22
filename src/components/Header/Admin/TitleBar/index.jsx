import BurgerMenu from "./burgerMenu";
import DisplayPageName from "./displayPageName";

const TitleBar = ({ navLinks }) => {
  return (
    <>
      <div className="flex items-center gap-3 md:gap-[14px]">
        <BurgerMenu />
        <DisplayPageName navLinks={navLinks} />
      </div>
    </>
  );
};

export default TitleBar;
