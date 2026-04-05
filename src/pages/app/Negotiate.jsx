import { useLocation } from "react-router-dom"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import Loader from "../../components/Loader"
import Toast from "../../components/Toast"
import api from "../../services/api"

const Negotiate = () => {

  const location = useLocation()

  const initialClauses =
    location.state?.clauses || []

  const [clauses, setClauses] =
    useState(initialClauses)

  const [email, setEmail] = useState(null)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const riskColor = (level) => {

    if (level === "High")
      return "bg-red-100 text-red-700 border-red-200"

    if (level === "Medium")
      return "bg-yellow-100 text-yellow-700 border-yellow-200"

    return "bg-green-100 text-green-700 border-green-200"

  }

  const removeClause = (index) => {

    setClauses(
      clauses.filter((_, i) => i !== index)
    )

  }


  const generateEmail = async () => {

    if (!clauses.length) {

      setError("Select atleast one clause")
      return

    }

    try {

      setLoading(true)

      const res = await api.post(
        "/generate-email",
        {

          party_1: "Client",

          party_2: "Vendor",

          risky_clauses:
            clauses.map(
              c => c.clause_title
            ),

          key_concerns:
            clauses.map(
              c => c.explanation
            ),

          improvement_recommendations:
            clauses.map(
              c => c.suggestion
            )

        }
      )

      setEmail(res.data)

    }
    catch {

      setError("Failed to generate email")

    }
    finally {

      setLoading(false)

    }

  }

  const copyEmail = async () => {

    if (!email) return

    const fullEmail =
      `Subject: ${email.subject}

${email.email_body.replace(/\*\*/g, "")}`

    await navigator.clipboard.writeText(fullEmail)

    alert("Email copied to clipboard")

  }


  return (

    <div className="max-w-4xl mx-auto px-4 py-10">

      {error && <Toast message={error} type="error" />}
      {success && <Toast message={success} type="success" />}

      <h1 className="text-3xl font-semibold mb-6">

        Negotiation Email Generator

      </h1>


      {/* SELECTED CLAUSES */}

      <div className="space-y-4 mb-8">

        {

          clauses.map((clause, i) => (

            <div
              key={i}
              className={`
    border
    rounded-xl
    p-4
    shadow-sm
    relative
    ${riskColor(clause.risk_level)}
  `}
            >

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="font-semibold">
                    {clause.clause_title}
                  </h3>

                  <span className="text-xs font-medium opacity-80">
                    <b>Risk Level: </b>
                    {clause.risk_level}
                  </span>

                </div>


                <button
                  onClick={() => removeClause(i)}
                  className="
      ml-4
      text-lg
      font-bold
      text-gray-400
      hover:text-red-600
      transition
    "
                >

                  ×

                </button>

              </div>

              <p className="text-sm mt-1">

                {clause.explanation}

              </p>

              <p className="text-sm mt-2">

                <b>Suggestion: </b>

                {clause.suggestion}

              </p>

            </div>

          ))

        }

      </div>


      <button
        onClick={generateEmail}
        className="
          px-6
          py-3
          bg-indigo-600
          text-white
          rounded-lg
          shadow
          hover:bg-indigo-700
        "
      >

        Generate Email

      </button>


      {loading && <Loader />}


      {/* EMAIL OUTPUT */}

      {

        email && (

          <div
            className="
              mt-10
              border
              rounded-xl
              p-6
              bg-gray-50
              shadow-sm
            "
          >

            <p className="text-sm text-gray-500 mb-1">

              Subject

            </p>

            <h2 className="font-semibold mb-4">

              {email.subject}

            </h2>


            <div className="border-t pt-4 whitespace-pre-line">

              <ReactMarkdown>

                {email.email_body}

              </ReactMarkdown>

            </div>

          </div>

        )

      }

    </div>

  )

}

export default Negotiate