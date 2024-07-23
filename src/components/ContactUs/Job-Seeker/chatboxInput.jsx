import SendMessageSVG from "@/assets/Chatbox/sendMessage";
import { useState } from "react";

const ChatboxInput = ({ sendANewMessage }) => {
  const [singleMessage, setSingleMessage] = useState("");
  const doSendMessage = (e) => {
    e.preventDefault();
    if (singleMessage && singleMessage.length > 0) {
      const newMessagePayload = {
        sentAt: new Date(),
        sentBy: "Me",
        isChatOwner: true,
        text: singleMessage,
      };
      sendANewMessage(newMessagePayload);
      setSingleMessage("");
    }
  };
  return (
    <>
      <form className="relative z-20 mx-3 my-3 border-1 overflow-hidden border-black border-solid rounded-full bg-[#cecece] flex justify-between items-center">
        <input
          type="text"
          value={singleMessage}
          onChange={(e) => setSingleMessage(e.target.value)}
          placeholder="Write Your Message Here"
          className="flex-1 text-[15px] h-full p-[18px] bg-transparent border-none focus:outline-none placeholder:text-black"
        />
        <div className="flex items-center w-12">
          <button
            type="submit"
            onSubmit={(e) => doSendMessage(e)}
            onClick={(e) => doSendMessage(e)}
          >
            <SendMessageSVG />
          </button>
        </div>
      </form>
    </>
  );
};

export default ChatboxInput;
