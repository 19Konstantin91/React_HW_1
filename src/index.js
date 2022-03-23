import ReactDOM from "react-dom";
import React, {useState, useEffect} from 'react';

import './index.css';

const MessageList = () => {
    const [value, setValue] = useState ("");
    const [messages, setMessages] = useState ([
        {
            author: "Bot",
            message: "Hello!",
            date: new Date().toLocaleString(),
        },
    ]);

    const sendMessage = () => {
        setMessages ([...messages, {author:"User", message : value, date: new Date().toLocaleString(),}])
        setValue("");
    }

    useEffect ( () => {
        const LastMessages = messages[messages.lenght -1];
        let timerId = null;
////////Вопрос остался без ответа, где ошибка?////////
        if (messages.length && LastMessages.author === "User"){
            timerId = setTimeout (() => {
                setMessages ([...messages, {author: "Bot", message: "Hello from bot"},
                ]);
            }, 1500);
        }
////////.....................................////////
        return () => {
            clearInterval (timerId);
        };
    }, [messages]);

    return (
        <div>
            <input
            placeholder='введите сообщение...'
            value = {value}
            onChange = {(event) => setValue (event.target.value)}
            />
            <button onClick = {sendMessage}>send message</button>
            <hr />
            {messages.map ((message) => (
                <div>
                    <h2> {message.author} </h2>
                    <p> {message.message} </p>
                    <p> {message.date}</p>
                    <hr />
                </div>    
            ))}
        </div>
    )
};

function App() {
    return (
        <>
            <MessageList />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
