import { useState } from "react";
import { Chatbot } from "supersimpledev";
import loading from "../assets/loading-spinner.gif";
import "./ChatInput.css";
import dayjs from "dayjs";

const ChatInput = ({ chatMessages, setChatMessages }) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const saveText = (e) => {
    setInputText(e.target.value);
  };

  async function sendMessage() {
    const loading_spinner = <img className="loading-spinner" src={loading} />;
    if (isLoading == true || inputText === "") {
      return;
    }
    // loading...
    setIsLoading(true);
    const newMsgs = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: dayjs().format("h:mma"),
      },
      {
        message: loading_spinner,
        sender: "bot",
        id: crypto.randomUUID(),
      },
    ];

    setInputText("");
    setChatMessages(newMsgs);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages(() => [
      ...newMsgs.slice(0, newMsgs.length - 1),
      {
        message: response,
        sender: "bot",
        id: crypto.randomUUID(),
        time: dayjs().format("h:mma"),
      },
    ]);
    setIsLoading(false);
    // loading end...
  }

  const handleEnterEscape = (e) => {
    if (e.key === "Enter") sendMessage();
    if (e.key === "Escape") setInputText("");
  };
  const clearLocalStorage = () => {
    setChatMessages([]);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        name="input_text"
        id="input_text"
        placeholder="Send a message to chatbot"
        className="search-input"
        size="30"
        onChange={saveText}
        value={inputText}
        onKeyDown={handleEnterEscape}
      />
      <button onClick={sendMessage} className="search-button">
        Send
      </button>
      <button onClick={clearLocalStorage} className="clear-button">
        Clear
      </button>
    </div>
  );
};

export default ChatInput;
