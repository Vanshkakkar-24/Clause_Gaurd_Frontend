const Loader = () => (

  <div className="
    fixed inset-0
    bg-black/40
    backdrop-blur-sm
    flex items-center justify-center
    z-50
  ">

    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">

      <div className="
        animate-spin
        rounded-full
        h-12 w-12
        border-b-2
        border-indigo-600
      "/>

      <p className="mt-4 text-sm text-gray-600">
        Analyzing contract...
      </p>

    </div>

  </div>

)

export default Loader