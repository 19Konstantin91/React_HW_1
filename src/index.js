import ReactDOM from "react-dom";
import React  from 'react';
import { MessageList, Layout, Header, ChatList } from "./components";

import './global.css';



const App = () => {
    return (
      <>
        <Layout
          messages={<MessageList />}
          chats={<ChatList />}
          header={<Header />}
        />
      </>
    );
  };

ReactDOM.render(<App />, document.getElementById("root"));
