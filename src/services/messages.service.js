import { http } from "../http";

export const getMessagesForConversation = (conversationId, userId) => {
  const path = `/conversations/${conversationId}/messages`;
  return http.get(path, { headers: { "User-Id": userId } });
};

export const sendMessage = (conversationId, content, userId) => {
  const path = `/conversations/${conversationId}/messages`;
  return http.post(
    path,
    {
      content,
    },
    { headers: { "User-Id": userId } }
  );
};

export const setViewed = (conversationId, userId, index) => {
  const path = `/conversations/${conversationId}/view_horizon`;
  return http.post(
    path,
    {
      index,
    },
    { headers: { "User-Id": userId } }
  );
};
