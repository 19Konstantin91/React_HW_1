import React, { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import { useStyles } from "./use-styles";
import { Keyboard } from "@mui/icons-material";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import { useParams } from "react-router-dom";

export const MessageList = () => {
  const ref = useRef();
  const { roomId } = useParams();

  const [value, setValue] = useState("");
  const [messageList, setMessageList] = useState({
    room1: [
      {
        author: "Bot",
        message: "Hello from Bot!",
        date: new Date().toLocaleString(),
      },
    ],
  });

  const styles = useStyles();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messageList]);

  const sendMessage = useCallback(
    (message, author = "User") => {
      if (message) {
        setMessageList({
          ...messageList,
          [roomId]: [
            ...(messageList[roomId] ?? []),
            {
              author,
              message,
              date: new Date().toLocaleString(),
            },
          ],
        });
        setValue("");
      }
    },
    [messageList, roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(value);
    }
  };

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        sendMessage("Hello from Bot", "Bot");
      }, 1500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messageList, roomId, sendMessage]);

  const messages = messageList[roomId] ?? [];
  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={message.date} />
        ))}
      </div>
      <Input
        placeholder="Сообщение..."
        value={value}
        autoFocus={true}
        onKeyPress={handlePressInput}
        onChange={(event) => setValue(event.target.value)}
        className={styles.input}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            {value && (
              <Send className="iconSend" onClick={() => sendMessage(value)} />
            )}
          </InputAdornment>
        }
        startAdornment={
          <InputAdornment position="start">
            <Keyboard />
          </InputAdornment>
        }
      />
    </>
  );
};
