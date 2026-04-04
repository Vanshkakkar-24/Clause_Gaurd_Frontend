const Problem = () => (

  <section className="py-28 bg-gray-50">

    <div className="max-w-6xl mx-auto px-6">

      <div className="text-center mb-14">

        <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">

          The Problem

        </span>

        <h2 className="text-4xl font-bold mt-4 text-gray-800">

          You Shouldn't Need a Lawyer to
          Understand What You're Signing

        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">

          Contracts are written by lawyers, for lawyers.
          ContractIQ bridges that gap for everyone else.

        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <Card
          icon="📄"
          title="Complex Legal Language"
          desc="Dense legalese makes it difficult to understand what you're agreeing to."
        />

        <Card
          icon="⚠️"
          title="Hidden Risky Clauses"
          desc="Auto-renewals, IP ownership traps, and hidden penalties buried in fine print."
        />

        <Card
          icon="💰"
          title="Costly Legal Consultations"
          desc="Hiring lawyers for every contract is expensive and time consuming."
        />

      </div>

    </div>

  </section>

)

const Card = ({ icon, title, desc }) => (

  <div className="
    bg-white
    border
    rounded-xl
    p-6
    hover:shadow-md
    transition
  ">

    <div className="
      w-10 h-10
      flex items-center justify-center
      bg-indigo-100
      text-indigo-600
      rounded-lg
      mb-4
      text-lg
    ">

      {icon}

    </div>

    <h3 className="font-semibold mb-2 text-gray-800">

      {title}

    </h3>

    <p className="text-sm text-gray-500">

      {desc}

    </p>

  </div>

)

export default Problem