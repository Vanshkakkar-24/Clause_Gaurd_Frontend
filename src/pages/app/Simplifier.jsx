import { useState } from "react"
import { useTranslation } from "react-i18next"

import FileUpload from "../../components/FileUpload"
import Loader from "../../components/Loader"
import Toast from "../../components/Toast"

import api from "../../services/api"

const Simplifier = () => {

  const { t } = useTranslation()

  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleUpload = (selectedFile) => {

    setFile(selectedFile)
    setSuccess(t("simplifier.fileReady") || "File ready")
    setError("")
    setResponse(null)

  }

  const handleSubmit = async () => {

    if (!file) {

      setError(t("simplifier.noFile") || "Please upload a contract")
      return

    }

    try {

      setLoading(true)
      setError("")
      setSuccess("")

      const formData = new FormData()
      formData.append("file", file)

      const res = await api.post("/simplify/file", formData)

      setResponse(res.data)

      setSuccess(t("simplifier.success") || "Contract simplified successfully")

    }
    catch {

      setError(t("simplifier.failed") || "Failed to simplify contract")

    }
    finally {

      setLoading(false)

    }

  }


  return (

    <div className="max-w-6xl mx-auto px-4 py-10">

      {loading && <Loader />}

      {error && <Toast message={error} type="error" />}
      {success && <Toast message={success} type="success" />}

      <h1 className="text-3xl font-semibold mb-2">
        {t("simplifier.title") || "Simplify Contract"}
      </h1>

      <p className="text-gray-500 mb-6">
        {"Upload a legal contract to convert it into plain English"}
      </p>


      <FileUpload
        onUpload={handleUpload}
        file={file}
        label={"Upload contract"}
      />


      <button
        type="button"
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

        {"Simplify"}

      </button>



      {

        response && (

          <div className="mt-12 space-y-8">

            <h2 className="text-xl font-semibold">
              {t("simplifier.resultTitle") || "Simplified Contract"}
            </h2>



            {/* SUMMARY CARD */}

            <div className="
              bg-gradient-to-r
              from-indigo-50
              to-white
              border
              rounded-xl
              p-6
              shadow-sm
            ">

              <p className="text-gray-700">
                {response.summary}
              </p>

            </div>



            {/* CLAUSES */}

            <div className="space-y-5">

              {

                response.simplified_clauses.map((clause, i) => (

                  <div
                    key={i}
                    className="
                      border
                      rounded-xl
                      p-5
                      bg-white
                      shadow-sm
                    "
                  >

                    <h3 className="font-semibold text-indigo-700">
                      {clause.clause_title}
                    </h3>


                    <div className="mt-3 text-sm">

                      <p className="font-medium text-gray-500">
                        Original clause
                      </p>

                      <p className="mt-1 text-gray-700 whitespace-pre-line">
                        {clause.original_clause}
                      </p>

                    </div>


                    <div className="mt-4 text-sm">

                      <p className="font-medium text-gray-500">
                        Simplified explanation
                      </p>

                      <p className="mt-1 text-gray-700">
                        {clause.simplified_explanation}
                      </p>

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

export default Simplifier