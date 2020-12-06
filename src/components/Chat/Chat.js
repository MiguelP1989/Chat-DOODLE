// Third-party imports

// Global imports

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
        <form>
          <input />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
