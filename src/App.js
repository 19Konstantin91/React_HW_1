import React from 'react';
import ReactDOM from 'react-dom';


export function App() {

  return (
    <div className="App">
      <header className="App-header"> <h1>Message</h1></header>
    </div>
  );
  
};
function Message(props) {
  return (
    <div className="Message">
      <div className="Message-text">{props.text}</div>
      <div className="Message-date">{formatDate(props.date)}</div>
    </div>
  );
}

function formatDate(date) {
  return date.toLocaleString();
}

const message = {
  text: 'Hello React!',
  date: new Date(),
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Message
        text={message.text}
        date={message.date}
      />
  </React.StrictMode>,
  document.getElementById('root')
)

