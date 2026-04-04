import { useState } from "react"
import FileUpload from "../../components/FileUpload"
import Loader from "../../components/Loader"
import Toast from "../../components/Toast"
import ResultCard from "../../components/ResultCard"
import api from "../../services/api"

const Compare = () => {

  const [file1, setFile1] = useState(null)
  const [file2, setFile2] = useState(null)

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const compareContracts = async () => {

    try {

      setLoading(true)
      setError("")
      setData(null)

      const formData = new FormData()

      formData.append("file1", file1)
      formData.append("file2", file2)

      const res = await api.post("/compare/files", formData)

      setData(res.data)

    }
    catch {

      setError("Comparison failed")

    }
    finally {

      setLoading(false)

    }

  }

  return (

    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-semibold text-gray-900 mb-2">

        Compare Contracts

      </h1>

      <p className="text-gray-500 mb-8">

        Upload two versions of the contract to see differences and risk changes.

      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <FileUpload
          label="Contract Version 1"
          onUpload={setFile1}
        />

        <FileUpload
          label="Contract Version 2"
          onUpload={setFile2}
        />

      </div>

      <button
        disabled={!file1 || !file2}
        onClick={compareContracts}
        className="
          mt-6
          w-full md:w-auto
          px-8 py-3
          bg-indigo-600
          text-white
          rounded-lg
          font-medium
          hover:bg-indigo-700
          disabled:bg-gray-300
          disabled:cursor-not-allowed
          transition
        "
      >

        Compare →

      </button>

      {loading && <Loader />}

      {error && (

        <div className="mt-6">

          <Toast message={error} type="error" />

        </div>

      )}

      {data && (

        <div className="mt-10">

          <ResultCard data={data} />

        </div>

      )}

    </div>

  )

}

export default Compare