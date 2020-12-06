// Third-party imports
import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

// Global imports
import ChatForm from "../ChatForm/ChatForm";
import MessageCard from "../MessageCard/MessageCard";

// Local imports
import "./Chat.css";

////////////////////////////////////////////////////////////////////////////////

const Chat = ({ location }) => {
  // Hooks
  const [messageArray, setMessageArray] = useState([]);
  const [name, setName] = useState("");
  const elementRef = useRef();

  const setScroll = (elementRef) => {
    elementRef.current.scrollTop =
      elementRef.current.scrollHeight - elementRef.current.clientHeight;
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    for (let param of query.entries()) {
      setName(param[1]);
    }
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    // Get messages request
    const url = `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=hHoTRd9y8HYs&since=1607293472669`;
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
      setScroll(elementRef);
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
      author: name,
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
      setScroll(elementRef);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="chat-container" ref={elementRef}>
        <MessageCard name={name} messages={messageArray} />
      </div>
      <div className="form-container ">
        <ChatForm onAddMessage={onAddMessageHandler} />
      </div>
    </div>
  );
};

export default Chat;
