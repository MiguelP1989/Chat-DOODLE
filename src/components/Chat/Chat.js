// Third-party imports
import React, { useState, useEffect } from "react";
import moment from "moment";

// Global imports
import ChatForm from "../ChatForm/ChatForm";
import MessageCard from "../MessageCard/MessageCard";

// Local imports
import "./Chat.css";

////////////////////////////////////////////////////////////////////////////////

const Chat = () => {
  // Hooks
  const [messageArray, setMessageArray] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    // Get messages request
    const url = `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=hHoTRd9y8HYs&since=1607269686876`;
    try {
      const request = await fetch(url);
      const resp = await request.json();
      const messages = resp.map((msg) => {
        const dateObject = new Date();
        const date = moment(dateObject).format("Do MMM YYYY, h:mm'");
        const msgInfo = {
          author: msg.author,
          message: msg.message,
          timestamp: date,
          userId: msg._id,
        };
        return msgInfo;
      });

      setMessageArray(messages);
    } catch (err) {
      console.log(err);
    }
  };

  const onAddMessageHandler = async (message) => {
    // Post messages request
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
        <MessageCard messages={messageArray} />
      </div>
      <div className="form-container ">
        <ChatForm onAddMessage={onAddMessageHandler} />
      </div>
    </div>
  );
};

export default Chat;
