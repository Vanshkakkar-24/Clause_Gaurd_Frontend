const Footer = () => (

  <footer className="bg-gradient-to-r from-[#0b1026] to-[#121a3a] border-t border-white/10 text-white mt-20">
    <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 text-sm">

      {/* BRAND */}

      <div>
        <h2 className="text-lg font-semibold text-indigo-400 mb-3">
          ContractIQ
        </h2>

        <p className="text-white/60 leading-relaxed">
          AI-powered contract intelligence that helps
          you understand risks, simplify clauses and
          negotiate better agreements.
        </p>
      </div>

      {/* PRODUCT */}

      <div>
        <h3 className="font-semibold mb-3">
          Product
        </h3>
        <ul className="space-y-2 text-white/60">
          <li>Contract Analysis</li>
          <li>Risk Detection</li>
          <li>Negotiation Email</li>
          <li>Clause Simplification</li>
        </ul>
      </div>

      {/* COMPANY */}

      <div>
        <h3 className="font-semibold mb-3">
          Company
        </h3>
        <ul className="space-y-2 text-white/60">
          <li>About</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* CTA */}

      <div>
        <h3 className="font-semibold mb-3">
          Get Started
        </h3>
        <p className="text-white/60 mb-3">
          Upload your contract and get AI insights in seconds.
        </p>
        <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-sm">
          Try ContractIQ
        </button>
      </div>
    </div>

    {/* bottom bar */}

    <div className="border-t border-white/10 py-5 text-center text-white/40 text-xs">
      © 2026 ContractIQ • AI-powered contract intelligence
    </div>

  </footer>
)

export default Footer