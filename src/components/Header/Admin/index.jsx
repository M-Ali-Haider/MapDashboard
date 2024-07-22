import HeaderControls from "./Controls";
import TitleBar from "./TitleBar";

const Header = ({ profileLink, allPaths }) => {
  return (
    <>
      <header className="py-4 pl-[18px] pr-9 shadow-xl w-full bg-white flex items-center justify-between">
        <TitleBar allPaths={allPaths} />
        <HeaderControls profileLink={profileLink} />
      </header>
    </>
  );
};

export default Header;
