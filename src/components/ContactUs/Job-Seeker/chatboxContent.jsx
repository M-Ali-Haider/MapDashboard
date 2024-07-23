import { useSelector } from "react-redux";

const ChatboxContent = ({ chatMessages, chatContentRef }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <>
      <div
        className="mt-[80px] px-6 max-h-[422.4px] overflow-y-scroll pt-9 no-scrollbar"
        ref={chatContentRef}
      >
        {chatMessages.map((item, index) => (
          <div
            key={index}
            className={`flex w-full ${
              item.isChatOwner ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex flex-col ${
                item.isChatOwner ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`${
                  item.isChatOwner
                    ? "bg-white text-black"
                    : "bg-[#89A0FF] text-white"
                } ${
                  isSidebarOpen ? "max-w-96" : "max-w-[550px]"
                }  p-3 rounded-[20px] border-2 border-black border-solid relative z-10 transition-all duration-300 ease-custom-ease`}
              >
                <div className="leading-[24px] font-medium mb-1">
                  {item.sentBy}
                </div>
                <div className="leading-[24px] text-[15px]">{item.text}</div>
              </div>
              <div
                style={{
                  clipPath: `${
                    item.isChatOwner
                      ? "polygon(100% 0, 0 0, 100% 100%)"
                      : "polygon(100% 0, 0 0, 0 100%)"
                  }`,
                }}
                className={`bg-black w-[46px] h-8 -mt-4`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatboxContent;
