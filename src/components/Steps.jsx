const Steps = () => (

  <section
    id="steps"
    className="py-28 bg-gradient-to-r from-[#0b1026] to-[#121a3a] text-white"
  >

    <div className="max-w-7xl mx-auto px-6 text-center">

      <h2 className="text-4xl font-bold mb-14">

        Three Steps to Contract Clarity

      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        <Step title="Upload Contract" />

        <Step title="AI Analysis" />

        <Step title="Get Insights" />

      </div>

    </div>

  </section>

)

const Step = ({ title }) => (

  <div>

    <div className="w-14 h-14 mx-auto mb-4 bg-indigo-500/20 rounded-full flex items-center justify-center">

      ⚙️

    </div>

    {title}

  </div>

)

export default Steps