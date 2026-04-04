import { useEffect, useState } from "react"
import ClauseCard from "../../components/ClauseCard"
import RiskCard from "../../components/RiskCard"
import Loader from "../../components/Loader"
import Toast from "../../components/Toast"
import api from "../../services/api"

const Analysis = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {

    const fetchAnalysis = async () => {

      try {

        const contractId = localStorage.getItem("contract_id")

        const res = await api.get(`/analysis/${contractId}`)

        setData(res.data)

      }
      catch {

        setError("Failed to load analysis")

      }
      finally {

        setLoading(false)

      }

    }

    fetchAnalysis()

  }, [])

  if (loading) return <Loader />

  if (error) return <Toast message={error} type="error" />

  return (

    <div>

      <h1 className="text-2xl font-semibold mb-6">
        Contract Risk Analysis
      </h1>

      <RiskCard score={data.risk_score} />

      <div className="mt-6 space-y-4">

        {data.risky_clauses.map((clause, index) => (

          <ClauseCard
            key={index}
            clause={clause}
          />

        ))}

      </div>

    </div>

  )

}

export default Analysis