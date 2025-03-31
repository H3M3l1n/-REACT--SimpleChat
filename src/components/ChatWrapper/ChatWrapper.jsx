import Chat from "../Chat/Chat";
import NameBar from "../NameBar/NameBar";
import UserId from "../UserId/UserId";
import "./chatwrapper.sass";

const ChatWrapper = () => {
  return (
    <div className="chat_wrapper">
      <Chat />
      <div className="chat_wrapper-user">
        <NameBar />
        <UserId />
      </div>
    </div>
  );
};

export default ChatWrapper;
