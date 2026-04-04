const ChatMessage = ({ msg }) => (

  <div
    className={`mb-3 ${
      msg.sender==="user"
      ? "text-right"
      : ""
    }`}
  >

    <div
      className={`inline-block px-4 py-2 rounded ${
        msg.sender==="user"
        ? "bg-indigo-500"
        : "bg-slate-800"
      }`}
    >

      {msg.text}

    </div>

  </div>

);

export default ChatMessage;