import RobotProfileImage from "../assets/bot.png";
import UserProfileImage from "../assets/user.png";
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
  //const message=props.message; ->1
  //const {message,sender}=props; ->2 but parameter must be props only

  /*if (sender==='robot'){
                return(
                    <div>
                        <img src="bot.png" width="50" />
                        {message}
                    </div>
                )
            }*/

  return (
    <div class={sender === "user" ? "chat-message-user" : "chat-message-robot"}>
      {sender === "robot" && (
        <img src={RobotProfileImage} class="chat-message-profile" />
      )}
      <div class="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} class="chat-message-profile" />
      )}
    </div>
  );
}
