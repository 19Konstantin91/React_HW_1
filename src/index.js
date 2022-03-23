import ReactDOM from "react-dom";
import React, {useState, useEffect} from 'react';

import './index.css';

const MessageList = () => {
    const [value, setValue] = useState ("");
    const [messages, setmessages] = useState ([
        {
            author: "Bot",
            message: "message 1",
            date: new Date().toLocaleDateString(),
        },
    ]);

    const sendMessage = () => {
        setmessages ([...messages, {author:"User", message : value}])
        setValue("")
    }

    useEffect ( () => {
        const LastMessages = messages[messages.lenght -1];
        let timerId = null;

        if (messages.length && LastMessages.author === "User"){
            timerId = setTimeout ( () => {
                setmessages ([
                    ...messages,
                    {author: "Bot", message: "Hello from bot"},
                ]);
            }, 1500);
        }

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
