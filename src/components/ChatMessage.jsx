import robotProfile from "../assets/robot.png";
import userProfile from "../assets/person.png";
import "./ChatMessage.css";

const ChatMessage = ({ message, sender, time }) => {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  return (
    <div className={sender === "user" ? "user-msg" : "bot-msg"}>
      {sender === "bot" && (
        <img src={robotProfile} alt="" className="chat-message-profile" />
      )}
      <div className="text">
        {message}
        <div className="timetag">{time}</div>
      </div>

      {sender === "user" && (
        <img src={userProfile} alt="" className="chat-message-profile" />
      )}
    </div>
  );
};
export default ChatMessage;
