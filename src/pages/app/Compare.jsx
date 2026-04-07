import { useState } from "react"
import { useTranslation } from "react-i18next"
import FileUpload from "../../components/FileUpload"
import Loader from "../../components/Loader"
import Toast from "../../components/Toast"
import ResultCard from "../../components/ResultCard"
import api from "../../services/api"

const Compare = () => {

  const { t } = useTranslation();

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
      setError(t("compare.failed"))
    }
    finally {
      setLoading(false)
    }

  }

  return (
    <div className="p-8 max-w-6xl mx-auto flex flex-col font-sans">

      {!data && (
        <div className="mb-10">
          <h1 className="text-[32px] font-bold text-white mb-4">
            Contract <span className="text-transparent bg-clip-text bg-gradient-to-r from-ethereal-brandLight to-ethereal-brandDark">Differential</span> Analysis
          </h1>
          <p className="text-ethereal-textMuted max-w-2xl text-[15px] leading-relaxed">
            Upload two versions of your legal document. Our Ethereal Architect AI will identify clause deviations, risk exposure shifts, and semantic anomalies in real-time.
          </p>
        </div>
      )}

      {/* Upload Zone */}
      {!data && (
        <div className="grid md:grid-cols-2 gap-8 min-h-[350px]">
          <FileUpload
            label="Version A (Original)"
            onUpload={setFile1}
          />

          <FileUpload
            label="Version B (Modified)"
            onUpload={setFile2}
          />
        </div>
      )}

      {!data && (
        <div className="flex flex-col items-center mt-12 mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-2 ${file1 ? 'bg-[#0a2221] text-ethereal-brandLight border border-ethereal-brand/30' : 'bg-[#030a0a] text-[#455a58] border border-ethereal-border'}`}>
              <span className={`w-2 h-2 rounded-full ${file1 ? 'bg-ethereal-brandLight' : 'bg-[#455a58]'}`}></span> 
              BASE {file1 ? 'READY' : 'PENDING'}
            </div>
            <div className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-2 ${file2 ? 'bg-[#220a15] text-[#f472b6] border border-[#f472b6]/30' : 'bg-[#030a0a] text-[#455a58] border border-ethereal-border'}`}>
              <span className={`w-2 h-2 rounded-full ${file2 ? 'bg-[#f472b6]' : 'bg-[#455a58]'}`}></span> 
              VARIANT {file2 ? 'READY' : 'PENDING'}
            </div>
          </div>

          <button
            type="button"
            disabled={!file1 || !file2 || loading}
            onClick={compareContracts}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5eead4] to-[#2dd4bf] blur-md opacity-25 group-hover:opacity-50 transition-opacity rounded-xl"></div>
            <div className="relative px-10 py-4 bg-gradient-to-r from-[#0a2221] to-[#041010] border border-ethereal-brand/30 rounded-xl font-bold tracking-wider text-sm text-ethereal-brandLight hover:text-white hover:border-ethereal-brand transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed uppercase">
              🚀 COMPARE DOCUMENTS
            </div>
          </button>
          
          <p className="text-[11px] text-[#455a58] mt-6">
            By proceeding, you agree to our <span className="underline cursor-pointer">Security Protocols</span>. Data is encrypted via 256-bit AES at rest.
          </p>
        </div>
      )}

      {/* Info Cards Bottom if Not Comparing */}
      {!data && (
        <div className="grid md:grid-cols-3 gap-6 mt-auto self-stretch">
          <div className="bg-[#061515] border border-ethereal-border rounded-xl p-6">
            <div className="text-ethereal-brand mb-3">🛡️</div>
            <h4 className="text-white font-semibold mb-2">Legal Accuracy</h4>
            <p className="text-[13px] text-ethereal-textMuted">Cross-referenced against 50k+ legal precedents and jurisdictional requirements.</p>
          </div>
          <div className="bg-[#061515] border border-ethereal-border rounded-xl p-6">
            <div className="text-[#a78bfa] mb-3">⚡</div>
            <h4 className="text-white font-semibold mb-2">Neural Engine</h4>
            <p className="text-[13px] text-ethereal-textMuted">Powered by proprietary LLMs trained specifically on high-value enterprise contracts.</p>
          </div>
          <div className="bg-[#061515] border border-ethereal-border rounded-xl p-6">
            <div className="text-ethereal-text mb-3">✨</div>
            <h4 className="text-white font-semibold mb-2">Smart Highlighting</h4>
            <p className="text-[13px] text-ethereal-textMuted">Non-destructive comparison that visually maps changes without altering original formatting.</p>
          </div>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center my-20">
          <Loader />
          <p className="text-ethereal-brand mt-4 text-sm animate-pulse">Running Neural Engine...</p>
        </div>
      )}

      {error && (
        <div className="mt-6">
          <Toast message={error} type="error" />
        </div>
      )}

      {data && !loading && (
        <div className="mt-2 animate-fadeIn">
          <ResultCard data={data} />
        </div>
      )}

    </div>
  )
}

export default Compare
