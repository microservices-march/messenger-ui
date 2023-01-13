import React, { useEffect, useState } from "react";
import { getAllConversations } from "./services/conversations.service";
import "./ConversationList.css";

function ConversationList(props) {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    getAllConversations(props.userId)
      .then((res) => {
        setConversations(res.data.conversations);
      })
      .catch((e) => alert(`Failed to get conversations: ${e}`));
  }, [props.userId]);

  return (
    <aside className="side">
      <h5>Conversations</h5>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            <button
              className="link"
              onClick={() => props.handleConversationSelect(conversation.id)}
            >
              {conversation.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ConversationList;
