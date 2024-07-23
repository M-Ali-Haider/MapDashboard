"use client";
import ChatBoxHeader from "./chatboxHeader";
import ChatboxInput from "./chatboxInput";
import { messages } from "@/utils/messages";
import { useEffect, useRef, useState } from "react";
import ChatboxContent from "./chatboxContent";

const ContactUsChatBox = () => {
  const [chatMessages, setChatMessages] = useState(messages);
  const chatContentRef = useRef(null);
  const sendANewMessage = (message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };
  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <>
      <div className="shadow-figmaShadow rounded-[30px] flex-1 transition-[width] duration-300 ease-custom-ease relative overflow-hidden">
        <ChatBoxHeader />
        <ChatboxContent
          chatMessages={chatMessages}
          chatContentRef={chatContentRef}
        />
        <ChatboxInput sendANewMessage={sendANewMessage} />
      </div>
    </>
  );
};

export default ContactUsChatBox;
