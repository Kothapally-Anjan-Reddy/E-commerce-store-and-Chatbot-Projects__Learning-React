import { useState } from "react";
import "./App.css";
import {ChatInput} from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages.jsx'


function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "What's on your mind?",
      sender: "robot",
      id: "id1",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div class="app-container">
      <ChatMessages chatMessages={chatMessages} isLoading={isLoading} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}



export default App;
