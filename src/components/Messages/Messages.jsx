import { useContext, useEffect } from "react";
import { HomeContext } from "../../pages/Home";
import Message from "../Message/Message";
import "./messages.sass";

const Messages = () => {
  const { messages } = useContext(HomeContext);

  useEffect(() => {
    const scrollableDiv = document.getElementById('messages');
    scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
  }, [messages]);

  return (
    <div id="messages" className="messages">
      {messages.map((message) => (
        <Message message={message} key={message.id}></Message>
      ))}
    </div>
  );
};

export default Messages;
