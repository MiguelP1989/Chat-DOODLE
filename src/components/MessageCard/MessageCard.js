// Third-party imports

// Global imports

// Local imports
import "./MessageCard.css";

////////////////////////////////////////////////////////////////////////////////

const MessageCard = ({ messages, name }) => {
  return (
    <>
      {messages &&
        messages.map((msg) => (
          <div key={msg.userId}>
            <div className={msg.author === name ? "chat-log" : "chat-log-left"}>
              <div
                className={
                  msg.author === name
                    ? "chat-message-right"
                    : "chat-message-left"
                }
              >
                <div className="text-box">
                  {msg.author !== name && (
                    <p className="author">{msg.author}</p>
                  )}
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
