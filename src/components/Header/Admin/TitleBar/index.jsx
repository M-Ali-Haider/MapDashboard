import BurgerMenu from "./burgerMenu";
import DisplayPageName from "./displayPageName";

const TitleBar = ({ allPaths }) => {
  return (
    <>
      <div className="flex items-center gap-3 md:gap-[14px]">
        <BurgerMenu />
        <DisplayPageName allPaths={allPaths} />
      </div>
    </>
  );
};

export default TitleBar;
