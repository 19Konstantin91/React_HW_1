import React, { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
import { useStyles } from "./use-styles";
import { Keyboard } from "@mui/icons-material";
import { Send } from "@mui/icons-material";
import { Message } from "./message";

export const MessageList = () => {
  const ref = useRef();

  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    {
      author: "Bot",
      message: "Hello!",
      date: new Date().toLocaleString(),
    },
  ]);

  const styles = useStyles();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);

  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        {
          author: "User",
          date: new Date().toLocaleString(),
          message: value,
        },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const LastMessages = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && LastMessages.author === "User") {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          { author: "Bot", message: "I heard you!" },
        ]);
      }, 1500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages]);

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message 
          message={message}
          key={index}
          />
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
            {value && <Send className="iconSend" onClick={sendMessage} />}
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
