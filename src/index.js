import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, PrivateRoute, PublicRoute } from "./components";
import { ProfilePage, ChatPage, GistsPage, LoginPage, SignUpPage } from "./pages";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./API/firebase";

import "./global.css";

const App = () => {
  // @TODO перенести в redux
  const [session, setSession] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = !!session;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Header session={isAuth} />

            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute isAuth={isAuth} to="/login">
                    <h1>Home page</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/chat/*"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ChatPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/gists"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <GistsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <SignUpPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<h1>404 page</h1>} />
            </Routes>
          </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
