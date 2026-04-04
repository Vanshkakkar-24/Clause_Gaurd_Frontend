import { useRef, useState } from "react"

const FileUpload = ({ onUpload, label }) => {

  const inputRef = useRef()
  const [fileName, setFileName] = useState("")

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

    const file = e.dataTransfer.files[0]

    handleFile(file)

  }

  return (

    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => inputRef.current.click()}
      className="
        border-2 border-dashed
        rounded-xl
        p-6
        text-center
        cursor-pointer
        hover:border-indigo-500
        transition
        bg-white
      "
    >

      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={handleChange}
      />

      <p className="text-gray-700 font-medium">
        {label}
      </p>

      <p className="text-sm text-gray-400 mt-1">
        Drag & drop or click to browse
      </p>

      {fileName && (

        <div className="
          mt-4
          px-3 py-2
          bg-indigo-50
          text-indigo-700
          rounded-lg
          text-sm
          font-medium
        ">

          📄 {fileName}

        </div>

      )}

    </div>

  )

}

export default FileUpload