import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import {
  arrayUnion,
  doc,
  onSnapshot,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import ChatBackground from "../components/ChatBackground/ChatBackground";
import ChatWrapper from "../components/ChatWrapper/ChatWrapper";
import "./home.sass";

export const HomeContext = createContext();

const Home = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userIdShort, setUserIdShort] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "chats", "public"), (doc) => {
      if (doc.exists()) {
        const messagesData = doc.data().messages;
        setMessages(messagesData);
      }
    });

    return () => unsubscribe();
  }, []);

  const handlerUserLogin = (name) => {
    setUserName(name);
    try {
      signInAnonymously(auth);
      try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const userID = user.uid;
            setUserId(userID);
            setUserIdShort(userID.slice(-4));
          } else return;
        });
      } catch (err) {
        console.log(`ERROR [CODE ${err.code}]: `, err.message);
      }
    } catch (err) {
      console.log(`ERROR [CODE ${err.code}]: `, err.message);
    }
  };

  const handlerMessageSend = async (text) => {
    await updateDoc(doc(db, "chats", "public"), {
      messages: arrayUnion({
        id: uuid(),
        text,
        userName: userName,
        userId: userId,
        userIdShort: userIdShort,
        date: Timestamp.now(),
      }),
    });
  };

  return (
    <HomeContext.Provider
      value={{
        messages,
        userName,
        userId,
        userIdShort,
        handlerUserLogin,
        handlerMessageSend,
      }}
    >
      <div className="home">
        <div className="container">
          <ChatBackground />
          <ChatWrapper />
        </div>
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
