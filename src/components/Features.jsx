const Features = () => (

  <section id="features" className="py-28 bg-white text-gray-900">

    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center mb-14">

        <span className="text-indigo-500 text-sm">

          Features

        </span>

        <h2 className="text-4xl font-bold mt-3">

          Everything You Need to Protect Yourself

        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {features.map(f => (

          <div
            key={f.title}
            className="border p-6 rounded-xl hover:shadow-lg"
          >

            <div className="text-indigo-500 font-semibold mb-2">

              {f.title}

            </div>

            <p className="text-gray-500 text-sm">

              {f.desc}

            </p>

          </div>

        ))}

      </div>

    </div>

  </section>

)

const features = [

  {
    title: "Smart Risk Analyzer",
    desc: "Detect risky clauses instantly"
  },

  {
    title: "Contract Simplifier",
    desc: "Convert legal jargon to plain English"
  },

  {
    title: "Contract Comparison",
    desc: "Compare versions side-by-side"
  },

  {
    title: "Negotiation Assistant",
    desc: "AI suggested clause improvements"
  },

  {
    title: "AI Contract Chat",
    desc: "Ask questions about contract"
  },

  {
    title: "Multi-language Support",
    desc: "Supports 30+ languages"
  }

]

export default Features