import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
  })
);
