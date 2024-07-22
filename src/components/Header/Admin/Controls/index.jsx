import Message from "./message";
import Notification from "./notification";
import Profile from "./profile";
import HeaderSearchBar from "./searchbar";

const HeaderControls = ({ profileLink }) => {
  return (
    <>
      <div className="flex flex-1 justify-end items-center">
        <HeaderSearchBar />
        <div className="flex items-center gap-[14px] md:gap-5 mr-7">
          <Message />
          <Notification />
        </div>
        <Profile profileLink={profileLink} />
      </div>
    </>
  );
};

export default HeaderControls;
