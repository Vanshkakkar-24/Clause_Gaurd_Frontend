const ClauseCard = ({ clause }) => {

  const riskColors = {

    low: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-red-100 text-red-700"

  };

  return (

    <div className="border rounded-xl p-4 bg-white shadow-sm">

      <div className="flex justify-between items-center mb-2">

        <h3 className="font-semibold text-gray-800">

          {clause.clause_title}

        </h3>

        <span className={`px-3 py-1 rounded-full text-sm font-medium ${riskColors[clause.risk_level?.toLowerCase()]}`}>

          {clause.risk_level}

        </span>

      </div>

      <p className="text-gray-600">

        {clause.explanation}

      </p>

      {clause.risk_score && (

        <p className="text-sm mt-2 text-gray-500">

          Risk Score: {clause.risk_score}

        </p>

      )}

    </div>

  );

};

export default ClauseCard;