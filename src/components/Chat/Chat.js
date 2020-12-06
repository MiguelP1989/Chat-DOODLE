// Third-party imports

// Global imports
import ChatForm from "../ChatForm/ChatForm";

// Local imports
import "./Chat.css";

////////////////////////////////////////////////////////////////////////////////

const Chat = () => {
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
        <ChatForm />
      </div>
    </div>
  );
};

export default Chat;
