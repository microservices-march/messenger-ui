import React, { useState } from "react";
import "./UserSelect.css";

function UserSelect(props) {
  const [userId, setUserId] = useState(null);

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleChangeUser = (id) => {
    props.changeUserFn(id);
  };

  return (
    <div id="userSelect">
      <h4>Act as user:</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChangeUser(userId);
          setUserId("");
        }}
      >
        <input
          name="userId"
          value={userId || ""}
          onChange={handleChange}
          type="number"
        />
        <button>Change</button>
      </form>

      <p>Currently acting as user {props.userId}</p>
    </div>
  );
}

export default UserSelect;
