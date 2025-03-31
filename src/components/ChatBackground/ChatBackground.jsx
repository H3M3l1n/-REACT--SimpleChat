import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../pages/Home";
import "./chatbackground.sass";

const ChatBackground = () => {
  const { userName, userId } = useContext(HomeContext);

  const [backgroundColor, setBackgroundColor] = useState("red");

  useEffect(() => {
    if (userName && userId) {
      setBackgroundColor("green");
    } else setBackgroundColor("red");
  }, [userName, userId]);

  return (
    <div
      style={{ backgroundColor: `${backgroundColor}` }}
      className="chat_background"
    >
      <img
        src="./img/mon.png"
        alt="old monitor"
        className="chat_background-image"
      ></img>
    </div>
  );
};

export default ChatBackground;
