import { useState } from "react"
import { useTranslation } from "react-i18next"
import ChatMessage from "../../components/ChatMessage"
import Loader from "../../components/Loader"
import api from "../../services/api"

const Chat = () => {

  const { t } = useTranslation();

  const [messages, setMessages] = useState([])

  const [input, setInput] = useState("")

  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {

    if (!input) return

    const userMessage = {

      role: "user",
      content: input

    }

    setMessages(prev => [...prev, userMessage])

    setInput("")

    setLoading(true)

    try {

      const contractId = localStorage.getItem("contract_id")

      const res = await api.post("/chat", {

        contract_id: contractId,
        message: input

      })

      const aiMessage = {

        role: "assistant",
        content: res.data.answer

      }

      setMessages(prev => [...prev, aiMessage])

    }
    finally {

      setLoading(false)

    }

  }

  return (

    <div className="flex flex-col h-[70vh]">

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">

        {messages.map((msg, index) => (

          <ChatMessage
            key={index}
            role={msg.role}
            content={msg.content}
          />

        ))}

        {loading && <Loader />}

      </div>

      <div className="flex gap-2">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("chat.placeholder")}
          className="flex-1 border p-2 rounded-lg"
        />

        <button
          type="button"
          onClick={sendMessage}
          className="px-4 bg-blue-600 text-white rounded-lg"
        >

          {t("chat.send")}

        </button>

      </div>

    </div>

  )

}

export default Chat
