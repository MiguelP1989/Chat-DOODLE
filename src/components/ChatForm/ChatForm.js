// Third-party imports
import React, { useState } from "react";

// Global imports

// Local imports
import "./ChatForm.css";

////////////////////////////////////////////////////////////////////////////////

const ChatForm = ({ onAddMessage }) => {
  // Hooks
  const [inputText, setInputText] = useState("");

  const onSendMessage = (e) => {
    e.preventDefault();
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
