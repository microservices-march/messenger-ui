import React, { useState } from "react";

function ComposeMessage(props) {
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSend(message);
        setMessage("");
      }}
    >
      <label>
        <textarea
          name="message"
          cols="20"
          rows="2"
          value={message || ""}
          onChange={handleChange}
        />{" "}
      </label>
      <input type="submit" value="Send ⮕" />
    </form>
  );
}

export default ComposeMessage;
