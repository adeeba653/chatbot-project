import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import "./ChatMessages.css";

const ChatMessages = ({ chatMessages }) => {
  const chatMessagesRef = useRef(null);
  const useAutoScroll = ({ dependencies }) => {
    useEffect(() => {
      const containerElem = chatMessagesRef.current;
      if (containerElem) {
        containerElem.scrollTop = containerElem.scrollHeight;
      }
    }, dependencies);
    return chatMessagesRef;
  };
  useAutoScroll(chatMessages);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.length === 0 && (
        <div style={{ textAlign: "center" }}>
          Welcome to the Chatbot! Send a message using the textbox below.
        </div>
      )}
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          sender={chatMessage.sender}
          message={chatMessage.message}
          key={chatMessage.id}
          time={chatMessage.time}
        />
      ))}
    </div>
  );
};

export default ChatMessages;
