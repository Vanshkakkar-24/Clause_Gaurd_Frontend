import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import FileUpload from "../../components/FileUpload"
import Loader from "../../components/Loader"
import Toast from "../../components/Toast"
import api from "../../services/api"

const Redraft = () => {

  const location = useLocation()

  const [file, setFile] = useState(null)
  const [clauses, setClauses] = useState([])
  const [selectedClauses, setSelectedClauses] = useState([])
  const [loading, setLoading] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {

    if(location.state){

      setFile(location.state.file)
      setClauses(location.state.clauses)
      setSelectedClauses(location.state.clauses)

    }

  }, [])


  const toggleClause = (index) => {

    const clause = clauses[index]

    const exists = selectedClauses.find(c =>
      c.clause_title === clause.clause_title
    )

    if(exists){

      setSelectedClauses(
        selectedClauses.filter(c =>
          c.clause_title !== clause.clause_title
        )
      )

    }
    else{

      setSelectedClauses([...selectedClauses, clause])

    }

  }


  const handleRedraft = async () => {

    try{

      setLoading(true)
      setError("")
      setSuccess("")

      const formData = new FormData()

      formData.append("file", file)

      formData.append(
        "clauses",
        JSON.stringify(selectedClauses)
      )

      const res = await api.post(
        "/redraft/file",
        formData,
        {
          responseType:"blob"
        }
      )

      const url = window.URL.createObjectURL(
        new Blob([res.data])
      )

      setDownloadUrl(url)

      setSuccess("Redrafted contract ready!")

    }
    catch{

      setError("Redrafting failed")

    }
    finally{

      setLoading(false)

    }

  }


  const riskColor = (level) => {

    if(level === "High")
      return "bg-red-100 border-red-300"

    if(level === "Medium")
      return "bg-yellow-100 border-yellow-300"

    return "bg-green-100 border-green-300"

  }


  return(

    <div className="max-w-6xl mx-auto px-4 py-10">

      {loading && <Loader/>}

      {error && <Toast message={error} type="error"/>}

      {success && <Toast message={success} type="success"/>}


      <h1 className="text-3xl font-semibold mb-4">

        Redraft Contract

      </h1>


      <FileUpload
        file={file}
        onUpload={setFile}
      />


      {/* CLAUSES */}

      <div className="mt-8 space-y-4">

        {

          clauses.map((clause,index)=>(

            <div
              key={index}
              className={`
                border
                rounded-xl
                p-5
                ${riskColor(clause.risk_level)}
              `}
            >

              <div className="flex justify-between">

                <h3 className="font-semibold">

                  {clause.clause_title}

                </h3>


                <input
                  type="checkbox"
                  checked={
                    selectedClauses.find(c =>
                      c.clause_title === clause.clause_title
                    )
                  }
                  onChange={() => toggleClause(index)}
                />

              </div>


              <p className="text-sm mt-2">

                {clause.explanation}

              </p>


              <div className="mt-2 text-sm">

                <b>Recommendation:</b>

                <span className="ml-1">

                  {clause.recommendation}

                </span>

              </div>

            </div>

          ))

        }

      </div>


      {/* SUBMIT BUTTON */}

      <button
        onClick={handleRedraft}
        disabled={!file || loading}
        className="
          mt-8
          w-full
          bg-indigo-700
          text-white
          py-3
          rounded-lg
          shadow
          hover:bg-indigo-800
        "
      >

        Redraft Contract

      </button>


      {/* DOWNLOAD */}

      {

        downloadUrl && (

          <a
            href={downloadUrl}
            download="redrafted_contract.pdf"
            className="
              mt-4
              block
              text-center
              bg-green-600
              text-white
              py-3
              rounded-lg
              shadow
            "
          >

            Download PDF

          </a>

        )

      }

    </div>

  )

}

export default Redraft