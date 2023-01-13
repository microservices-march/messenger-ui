import React, { useEffect, useState } from "react";

import {
  getMessagesForConversation,
  sendMessage,
  setViewed,
} from "./services/messages.service";

import ComposeMessage from "./ComposeMessage";
import Message from "./Message";

import "./ChatWindow.css";

/* Holds the window with a single conversation and the message compose box
 *  as a separate component.  Takes care of loading messages itself.  All data
 *  About the conversation lives in this component
 */
function ChatWindow({ conversationId, userId }) {
  const [messages, setMessages] = useState(null);

  const scrollToBottom = () => {
    const el = document.querySelector(".messages");
    el.scrollTo(0, el.scrollHeight);
  };

  const handleSend = (messageContent) => {
    sendMessage(conversationId, messageContent, userId)
      .then((res) => {
        const message = res.data.message;
        setViewed(conversationId, userId, message.index).catch(
          (setViewedErr) => {
            console.log("failed to set viewed", setViewedErr);
          }
        );
        setMessages(messages.concat([res.data.message]));
        scrollToBottom();
      })
      .catch((err) => {
        alert(`Failed to send message: ${JSON.stringify(err)}`);
      });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (!conversationId) {
      setMessages(null);
      return;
    }
    getMessagesForConversation(conversationId, userId)
      .then((res) => {
        const newMessages = res.data.messages;
        setMessages(newMessages);
        const lastMessage = newMessages[newMessages.length - 1];
        // Indicate that the user has seen messages up to the current one loaded
        setViewed(conversationId, userId, lastMessage.index).catch(
          (setViewedErr) => {
            console.log("failed to set viewed", setViewedErr);
          }
        );
      })
      .catch((err) => {
        console.error(`Error getting messages: ${err}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversationId, userId]);

  return (
    <main className="content">
      <div className="messages">
        {(messages &&
          messages.map((message) => (
            <Message
              key={message.id}
              id={message.id}
              username={message.username}
              content={message.content}
            />
          ))) || <h3>Please choose a conversation</h3>}
      </div>
      {messages && <ComposeMessage handleSend={handleSend} />}
    </main>
  );
}

export default ChatWindow;
