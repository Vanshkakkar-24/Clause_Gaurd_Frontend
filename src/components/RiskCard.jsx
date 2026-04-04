const RiskCard = ({ clause }) => {

  const colorMap = {

    HIGH: "bg-red-500/20 text-red-300",
    MEDIUM: "bg-yellow-500/20 text-yellow-300",
    LOW: "bg-green-500/20 text-green-300",

  };

  return (

    <div className="bg-slate-900 p-5 rounded-xl mb-4">

      <div className="flex justify-between mb-2">

        <h3 className="font-semibold">

          {clause.clause_title}

        </h3>

        <span
          className={`px-2 py-1 text-sm rounded ${colorMap[clause.risk_level]}`}
        >

          {clause.risk_level}

        </span>

      </div>

      <p className="text-sm text-gray-400 mb-2">

        {clause.clause_text_snippet}

      </p>

      <p className="mb-2">

        {clause.explanation}

      </p>

      <p className="text-indigo-300 text-sm">

        Suggestion:
        {" "}
        {clause.suggestion}

      </p>

    </div>

  );
};

export default RiskCard;