import { SEND_MESSAGE,} from "./types";

export const sendMessage = (roomId, message) => {
  return { type: SEND_MESSAGE, payload: {roomId, message}};
};

