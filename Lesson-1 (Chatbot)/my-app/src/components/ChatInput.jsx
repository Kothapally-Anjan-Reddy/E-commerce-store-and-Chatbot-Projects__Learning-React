import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'



export function ChatInput({ chatMessages, setChatMessages, isLoading, setIsLoading }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    //It gets what is being changed
    setInputText(event.target.value); //It retreives the value in it.
  }

  function sendMessage() {
    if (!inputText.trim() || isLoading) {
      return;
    }

    const currentInputText = inputText;

    // Add user's message
    setChatMessages([
      ...chatMessages,
      {
        message: currentInputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);

    // Show loading immediately
    setIsLoading(true);

    // Clear input box
    setInputText("");

    // Get response
    // Later this can be an API call
    setTimeout(() => {
      const response = Chatbot.getResponse(currentInputText);

      setChatMessages((currentMessages) => [
        ...currentMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);

      // Response received → stop loading
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div class="chat-input-container">
      <input
        class="chat-input"
        placeholder="Enter a message to chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText} //Controlled Input.
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            sendMessage();
          }
        }}
      />
      <button onClick={sendMessage} class="send-button">
        Send
      </button>
    </div>
  );
}
