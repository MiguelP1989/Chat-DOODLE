// Third-party imports

// Global imports

// Local imports
import "./MessageCard.css";

////////////////////////////////////////////////////////////////////////////////

const MessageCard = ({ messages }) => {
  return (
    <>
      {messages &&
        messages.map((msg) => (
          <div key={msg.userId}>
            <div className="chat-log">
              <div className="chat-message">
                <div className="text-box">
                  <p>{msg.message}</p>
                  <div className="timestamp_div">
                    <p className="timestamp_p">{msg.timestamp}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default MessageCard;
