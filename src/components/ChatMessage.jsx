const ChatMessage = ({ role, content }) => (

  <div
    className={`mb-3 ${
      role === "user"
        ? "text-right"
        : ""
    }`}
  >

    <div
      className={`inline-block px-4 py-2 rounded ${
        role === "user"
          ? "bg-indigo-500 text-white"
          : "bg-slate-800 text-white"
      }`}
    >

      {content}

    </div>

  </div>

);

export default ChatMessage;
