import "./message.sass";

const Message = ({ message }) => {
  return (
    <div className="message">
      <p className="message_text">
        <span className="message_user">
          {message.userName} [{message.userIdShort}]:{" "}
        </span>
        {message.text}
      </p>
    </div>
  );
};

export default Message;
