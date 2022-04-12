import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { ProfilePage, ChatPage } from "./pages";
import { store } from "./store";

import "./global.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat/*" element={<ChatPage />} />
        <Route path="*" element={<h1>404 page</h1>} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
