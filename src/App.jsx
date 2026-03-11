import { useEffect, useState } from "react";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import "./App.css";
import { chatbot } from "supersimpledev";

function App() {
  const responses = {
    "what is your name?": "My name is Alexa.",
    "How old are you?": "22 y'old.",
    "What can you do?": "roll a dice, flip a coin, and tell you today's date.",
  };
  const [chatMessages, setChatMessages] = useState(
    localStorage.length === 0
      ? []
      : JSON.parse(localStorage.getItem("messages")),
  );

  useEffect(() => {
    chatbot.addResponses(responses);
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
