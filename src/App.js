import React, { useState } from "react";

import "./App.css";
import ChatWindow from "./ChatWindow";
import ConversationList from "./ConversationList";
import UserSelect from "./UserSelect";

// General styling and structure referenced from:
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout
function App() {
  const [conversationId, setConversationId] = useState(null);
  const [userId, setUserId] = useState(1);

  const handleConversationSelect = (newConversationId) => {
    setConversationId(newConversationId);
  };

  const handleCurrentUserChange = (newUserId) => {
    setUserId(newUserId);
    setConversationId(null);
  };

  return (
    <div className="App">
      <UserSelect changeUserFn={handleCurrentUserChange} userId={userId} />
      <div className="wrapper">
        <header className="main-head">
          <h1>Let's Chat It Up</h1>
        </header>
        <nav className="main-nav">
          <ul></ul>
        </nav>
        <ChatWindow conversationId={conversationId} userId={userId} />
        <ConversationList
          handleConversationSelect={handleConversationSelect}
          userId={userId}
        />
      </div>
    </div>
  );
}

export default App;
