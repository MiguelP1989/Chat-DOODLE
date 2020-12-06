// Third-party imports
import React, { useState } from "react";
import moment from "moment";

// Global imports
import ChatForm from "../ChatForm/ChatForm";

// Local imports
import "./Chat.css";

////////////////////////////////////////////////////////////////////////////////

const Chat = () => {
  // Hooks
  const [messageArray, setMessageArray] = useState([]);

  const onAddMessageHandler = async (message) => {
    // Post request
    const url = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0";
    const token = "hHoTRd9y8HYs";
    const user = {
      message: message.inputText,
      author: "Joao",
    };
    const data = JSON.stringify(user);
    try {
      const request = await fetch(url, {
        method: "POST",
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
        body: data,
      });
      const resp = await request.json();
      const dateObject = new Date();
      const date = moment(dateObject).format("Do MMM YYYY, h:mm'");

      // Setting messages info in state
      setMessageArray((prevMsg) => {
        return [
          ...prevMsg,
          {
            author: resp.author,
            message: resp.message,
            timestamp: date,
            userId: resp._id,
          },
        ];
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="chat-container">
        <div className="chat-log">
          <div className="chat-message">
            <div className="text-box">
              <p>Hello, how are you?</p>
              <div className="timestamp_div">
                <p className="timestamp_p">12 Mars 2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container ">
        <ChatForm onAddMessage={onAddMessageHandler} />
      </div>
    </div>
  );
};

export default Chat;
