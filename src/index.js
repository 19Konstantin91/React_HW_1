import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { ProfilePage, ChatPage } from "./pages";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import "./global.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="*" element={<h1>404 page</h1>} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
