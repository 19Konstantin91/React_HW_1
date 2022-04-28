import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages/reducer";
import { logger, botMessage, crashReporter } from "./middlewares";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { gistsReduser } from "./gists";
import { getPublicGistsApi, searchGistsByNameApi } from "../api/gists";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile"],
};

const reduser = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  gists: gistsReduser,
});

export const store = createStore(
  persistReducer(persistConfig, reduser),

  compose(
    applyMiddleware(
    crashReporter,
    thunk.withExtraArgument({ getPublicGistsApi, searchGistsByNameApi }),
    logger,
    botMessage
  ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
