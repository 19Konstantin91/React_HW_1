import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout, ChatList, MessageList } from "../components";

export const ChatPage=() =>{
  const navigate = useNavigate();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [navigate]);


    return (
        <>
        <Routes>
            <Route path="/" element={
                <Layout
                messages={<h1 style={{ color: "#775d5d", padding: "20px"}}>Выберите чат...</h1>}
                chats={<ChatList />}
              />
            } />
            <Route path=":roomId" element={
                <Layout
                messages={<MessageList />}
                chats={<ChatList />}
              />
            } />
        </Routes>
        </>
        
    );
};