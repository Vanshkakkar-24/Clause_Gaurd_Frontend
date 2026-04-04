import { useState } from "react"
import FileUpload from "../../components/FileUpload"
import Loader from "../../components/Loader"
import Toast from "../../components/Toast"
import api from "../../services/api"

const Upload = () => {

  const [file,setFile] = useState(null)
  const [loading,setLoading] = useState(false)
  const [response,setResponse] = useState(null)
  const [error,setError] = useState("")
  const [success,setSuccess] = useState("")

  const handleUpload = (selectedFile) => {

    setFile(selectedFile)
    setSuccess("File ready to upload")
    setError("")
    setResponse(null)

  }

  const handleSubmit = async () => {

    if(!file){

      setError("Upload a file first")
      return

    }

    try{

      setLoading(true)
      setError("")
      setSuccess("")

      const formData = new FormData()
      formData.append("file",file)

      const res = await api.post("/analyze/file",formData)

      setResponse(res.data)

      setSuccess("Contract analyzed successfully")

    }
    catch{

      setError("Upload failed")

    }
    finally{

      setLoading(false)

    }

  }


  const riskColor = (level) => {

    if(level==="High")
      return "bg-red-100 text-red-700 border-red-200"

    if(level==="Medium")
      return "bg-yellow-100 text-yellow-700 border-yellow-200"

    return "bg-green-100 text-green-700 border-green-200"

  }


  return (

    <div className="max-w-6xl mx-auto px-4 py-10">

      {loading && <Loader/>}

      {error && <Toast message={error} type="error"/>}

      {success && <Toast message={success} type="success"/>}


      <h1 className="text-3xl font-semibold mb-2">

        Upload Your Contract

      </h1>


      <p className="text-gray-500 mb-6">

        Upload a PDF or DOCX file. Max 10 MB.

      </p>


      <FileUpload
        onUpload={handleUpload}
        file={file}
      />


      <button
        onClick={handleSubmit}
        disabled={!file || loading}
        className="
          mt-6 w-full
          bg-gradient-to-r
          from-indigo-600 to-indigo-500
          text-white
          py-3
          rounded-lg
          font-medium
          shadow
          hover:opacity-90
          disabled:bg-gray-300
        "
      >

        Submit Contract

      </button>



      <div className="
        mt-6
        border
        border-blue-200
        bg-blue-50
        text-blue-700
        px-4 py-3
        rounded-lg
        text-sm
      ">

        ⚠ AI generated results may be inaccurate.

      </div>



      {

        response && (

          <div className="mt-12 space-y-8">


            <h2 className="text-xl font-semibold">

              Analysis Result

            </h2>



            {/* OVERVIEW CARD */}

            <div className="
              bg-gradient-to-r
              from-indigo-50
              to-white
              border
              rounded-xl
              p-6
              shadow-sm
            ">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-sm text-gray-500">

                    Contract Type

                  </p>

                  <p className="font-semibold">

                    {response.contract_overview.contract_type}

                  </p>

                </div>


                <div className="text-right">

                  <p className="text-sm text-gray-500">

                    Overall Risk

                  </p>

                  <p className="text-2xl font-bold">

                    {response.overall_risk_score}/10

                  </p>

                </div>

              </div>


              <p className="mt-4 text-gray-600">

                {response.summary}

              </p>

            </div>



            {/* CATEGORY SCORES */}

            <div className="grid md:grid-cols-4 gap-4">

              {

                Object.entries(
                  response.risk_breakdown
                ).map(([key,value])=>(

                  <div
                    key={key}
                    className="
                      border rounded-lg
                      p-4 bg-white
                    "
                  >

                    <p className="text-sm text-gray-500">

                      {key.replace("_"," ")}

                    </p>

                    <p className="text-lg font-semibold">

                      {value}/10

                    </p>

                  </div>

                ))

              }

            </div>



            {/* CLAUSES */}

            <div className="space-y-4">

              {

                response.risky_clauses.map((clause,i)=>(

                  <div
                    key={i}
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

                      <span className="text-xs font-medium">

                        {clause.risk_level}

                      </span>

                    </div>


                    <p className="mt-2 text-sm">

                      {clause.explanation}

                    </p>


                    <div className="mt-3 text-sm">

                      <b>Suggestion:</b>

                      <span className="ml-1">

                        {clause.suggestion}

                      </span>

                    </div>

                  </div>

                ))

              }

            </div>


          </div>

        )

      }

    </div>

  )

}

export default Upload