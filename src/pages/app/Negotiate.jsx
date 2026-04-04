import { useState } from "react"
import Loader from "../../components/Loader"
import Toast from "../../components/Toast"
import api from "../../services/api"

const Negotiate = () => {

  const [clause, setClause] = useState("")
  const [email, setEmail] = useState("")

  const [loading, setLoading] = useState(false)

  const generateEmail = async () => {

    try {

      setLoading(true)

      const res = await api.post("/negotiate", {

        clause_text: clause

      })

      setEmail(res.data.email)

    }
    catch {

      alert("Failed to generate email")

    }
    finally {

      setLoading(false)

    }

  }

  return (

    <div>

      <h1 className="text-2xl font-semibold mb-6">
        Negotiation Email Generator
      </h1>

      <textarea
        rows={6}
        placeholder="Paste clause..."
        value={clause}
        onChange={(e) => setClause(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      />

      <button
        onClick={generateEmail}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg"
      >

        Generate Email

      </button>

      {loading && <Loader />}

      {email && (

        <div className="mt-6 p-4 border rounded-lg bg-gray-50">

          {email}

        </div>

      )}

    </div>

  )

}

export default Negotiate