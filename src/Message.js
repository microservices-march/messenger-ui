import "./Message.css";

function Message(props) {
  return (
    <div className="message" key={props.id} >
      <div className="username">
        <strong>{props.username}</strong>
      </div>
      <div className="message-text">{props.content}</div>
    </div>
  );
}

export default Message;
