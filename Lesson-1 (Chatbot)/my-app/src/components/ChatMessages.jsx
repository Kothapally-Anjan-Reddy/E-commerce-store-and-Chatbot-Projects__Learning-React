import { useRef, useEffect } from "react";
import {ChatMessage} from './ChatMessage.jsx'
import './ChatMessages.css'

function ChatMessages({ chatMessages, isLoading }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;

    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages, isLoading]);

  return (
    <div class="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map(({ message, sender, id }) => {
        return <ChatMessage message={message} sender={sender} key={id} />;
      })}

      {/* Loading appears here */}
      {isLoading && <ChatMessage message="Loading..." sender="robot" />}
    </div>
  );
}


export default ChatMessages