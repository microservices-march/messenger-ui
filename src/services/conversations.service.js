import { http } from "../http";

export const getAllConversations = (userId) => {
  return http.get("/conversations", { headers: { "User-Id": userId } });
};
