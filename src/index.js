import ReactDOM from "react-dom";
import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessageList, Layout, Header, ChatList } from "./components";
import { ProfilePage, ChatPage } from "./pages";

import './global.css';



// const App = () => {
//     return (
//       <>
//         <Layout
//           messages={<MessageList />}
//           chats={<ChatList />}
//           header={<Header />}
//         />
//       </>
//     );
//   };

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/chat/*" element={<ChatPage />} />
      <Route path="*" element={<h1>404 page</h1>} />

    </Routes>
  </BrowserRouter>,
 document.getElementById("root"));
