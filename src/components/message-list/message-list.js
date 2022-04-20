import React, { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import { useStyles } from "./use-styles";
import { Keyboard } from "@mui/icons-material";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {sendMessage } from "../../store/messages";

export const MessageList = () => {
  const ref = useRef();
  const { roomId } = useParams();
  const dispatch = useDispatch();


  const messages = useSelector ((state) => {
    return state.messages.messages[roomId] ?? []
  });

  const [value, setValue] = useState("");
  

  const styles = useStyles();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessage(roomId, { author: author || " Bot", message}))
        setValue("");
      }
    },
    [roomId, dispatch]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  useEffect(() => {
    
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        send("Hello from Bot", "Bot");
      }, 1500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages, roomId, send]);

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={message.date} roomId={roomId} />
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
              <Send className="iconSend" onClick={() => send(value)} />
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
