import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"

const FileUpload = ({ onUpload, label }) => {

  const { t } = useTranslation();

  const inputRef = useRef()
  const [fileName, setFileName] = useState("")
  const [isDrag, setIsDrag] = useState(false)

  const displayLabel = label ?? t("fileUpload.defaultLabel");

  const handleFile = (file) => {
    if (!file) return
    setFileName(file.name)
    onUpload(file)
  }

  const handleChange = (e) => {
    const file = e.target.files[0]
    handleFile(file)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDrag(false)
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }

  return (
    <div className="bg-ethereal-card border border-ethereal-border rounded-[24px] p-8 flex flex-col items-center justify-center text-center h-full relative overflow-hidden group">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-ethereal-brand/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-ethereal-brand/10 transition-all"></div>

      <div
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setIsDrag(true); }}
        onDragLeave={() => setIsDrag(false)}
        onClick={() => inputRef.current.click()}
        className={`w-full flex flex-col items-center justify-center cursor-pointer transition-all ${isDrag ? "opacity-70 scale-95" : ""}`}
      >

        <input
          type="file"
          ref={inputRef}
          className="hidden"
          onChange={handleChange}
        />

        {/* Icon box */}
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-all ${
          fileName ? 'bg-ethereal-brand/10 border-ethereal-brand text-ethereal-brand shadow-[0_0_15px_rgba(45,212,191,0.2)]' : 'bg-ethereal-surface border-[#1a3a3a] text-ethereal-brandLight shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] group-hover:border-ethereal-brand/50'
        }`}>
          {fileName ? "📄" : "☁️"}
        </div>

        <h3 className="text-xl font-semibold text-ethereal-text mb-2">
          {displayLabel}
        </h3>

        {!fileName ? (
          <>
            <p className="text-sm text-ethereal-textMuted mb-8">
              Drop your baseline PDF or DOCX here
            </p>
            <div className="flex flex-col gap-4 w-full">
              <div className="border border-ethereal-border/50 border-dashed rounded-xl py-3 text-sm text-[#455a58] bg-[#030a0a]/50">
                Waiting for document...
              </div>
              <div className="text-ethereal-brandLight text-sm font-medium hover:text-ethereal-brand flex items-center justify-center gap-2">
                <span className="text-lg">+</span> Browse Local Files
              </div>
            </div>
          </>
        ) : (
          <div className="w-full mt-4 flex flex-col gap-3">
            <div className="bg-[#030a0a] border border-ethereal-border rounded-xl p-3 flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-ethereal-text truncate max-w-[80%]">📄 {fileName}</span>
                <span className="text-ethereal-brandLight text-xs">100%</span>
              </div>
              <div className="h-1 bg-ethereal-surface rounded-full overflow-hidden">
                <div className="h-full bg-ethereal-brand w-full"></div>
              </div>
            </div>
            <div className="text-ethereal-brandLight text-sm font-medium hover:text-ethereal-brand mt-4 cursor-pointer">
              Change File
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default FileUpload
