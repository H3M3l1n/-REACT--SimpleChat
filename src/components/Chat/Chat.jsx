import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../pages/Home.jsx";
import ChatInput from "../ChatInput/ChatInput";
import Messages from "../Messages/Messages";
import "./chat.sass";

const Chat = () => {
  const { userName, userId } = useContext(HomeContext);

  const [filter, setFilter] = useState("blur(1.5rem)");

  useEffect(() => {
    if (userName && userId) {
      setFilter("blur(0)");
    } else setFilter("blur(1.5rem)");
  }, [userName, userId]);

  return (
    <div className="chat" style={{ filter: `${filter}` }}>
      <Messages />
      <ChatInput />
    </div>
  );
};

export default Chat;
