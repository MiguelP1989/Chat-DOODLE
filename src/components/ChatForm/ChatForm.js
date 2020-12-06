// Third-party imports
import React, { useState } from "react";

// Global imports

// Local imports
import "./ChatForm.css";

////////////////////////////////////////////////////////////////////////////////
/**
 * @function ChatForm
 * @description Component to render the chat form.
 * @param {function}  onAddMessage - it takes the input message to be sent to the API in a post request
 */
const ChatForm = ({ onAddMessage }) => {
  // Hooks
  const [inputText, setInputText] = useState("");

  const onSendMessage = (e) => {
    e.preventDefault();
    if (!inputText) {
      return;
    }
    onAddMessage({ inputText });
    setInputText("");
  };

  const onChangeHandler = (e) => {
    const newInputText = e.target.value;
    setInputText(newInputText);
  };

  // Props
  const imputProps = {
    type: "text",
    placeholder: "Message",
    value: inputText,
    onChange: onChangeHandler,
  };

  const buttonProps = {
    type: "submit",
    onClick: onSendMessage,
  };
  return (
    <form>
      <input {...imputProps} />
      <button {...buttonProps}>Send</button>
    </form>
  );
};

export default ChatForm;
