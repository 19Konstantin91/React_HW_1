import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages/reducer";
import { logger, botMessage, crashReporter } from "./middlewares";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { gistsReducer } from "./gists";
import { getPublicGistsApi, searchGistsByNameApi } from "../API/gists";
import {
  getConversationApi,
  createConversationApi,
} from "../API/conversations";
import { getMessagesApi, createMessageApi } from "../API/messages";

const apis = {
  getPublicGistsApi,
  searchGistsByNameApi,
  getConversationApi,
  getMessagesApi,
  createMessageApi,
  createConversationApi,
};


const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile"],
};

export const reducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  gists: gistsReducer,
});

export const store = createStore(
  persistReducer(persistConfig, reducer),

  compose(
    applyMiddleware(
    crashReporter,
    thunk.withExtraArgument(apis),
    logger,
    botMessage
  ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
