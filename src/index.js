import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";

import './index.css';

const MessgeList = () => {
    const [value, setValue] = useState ("");
    const [messages, setmessages] = useState ([
        {
            authore: "Bot",
            message: "message1",
            date: new Date(). toLocaleDateString(),
        },
    ]);

    const sendMessage =() => {
        setmessages ([...messages,{author: "User", message : value}])
    };

    useEffect ( () => {
        const LastMessages = messages [massages.lenght -1];
        let timerId = null;

        if (messages.length && LastMessages.author == "User"){
            timerId = setTimeout ( () => {
                setmessages ([
                    ...messages,
                    {author: "Bot", message: "Hello from bot"},
                ]);
            }, 1500);
        };

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
                    <p> {massage.message} </p>
                    <hr />
                </div>    
            ))}
        </div>
    )
};

const App = () => {
    return (
        <>
         <MessgeList />
        </>
    );
},

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
