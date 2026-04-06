import { useTranslation } from "react-i18next";

const RiskBadge = ({ level }) => {

  const { t } = useTranslation();

  const colors = {
    Low: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    High: "bg-red-100 text-red-700"
  }

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[level] || "bg-gray-100 text-gray-700"}`}>
      {t(`riskLevel.${level}`, { defaultValue: level })}
    </span>
  )
}

const ResultCard = ({ data }) => {

  const { t } = useTranslation();

  return (

    <div className="space-y-6">

      {/* Risk summary */}
      <div className="grid md:grid-cols-2 gap-4">

        <div className="p-4 bg-white rounded-xl shadow">

          <h3 className="font-semibold mb-2">{t("resultCard.c1Risk")}</h3>

          <RiskBadge level={data.risk_summary.contract1_level} />

          <p className="text-sm mt-2 text-gray-500">
            {t("resultCard.score")} {data.contract1_risk_score}
          </p>

        </div>

        <div className="p-4 bg-white rounded-xl shadow">

          <h3 className="font-semibold mb-2">{t("resultCard.c2Risk")}</h3>

          <RiskBadge level={data.risk_summary.contract2_level} />

          <p className="text-sm mt-2 text-gray-500">
            {t("resultCard.score")} {data.contract2_risk_score}
          </p>

        </div>

      </div>

      {/* Summary */}
      <div className="p-5 bg-white rounded-xl shadow">

        <h3 className="font-semibold mb-2">{t("resultCard.summary")}</h3>

        <p className="text-gray-600">
          {data.summary}
        </p>

        <p className="mt-3 font-medium">
          {t("resultCard.better")} {data.better_contract}
        </p>

      </div>

      {/* Differences */}
      <div className="space-y-4">

        {data.key_differences.map((item, index) => (

          <div key={index} className="p-4 bg-white rounded-xl shadow">

            <div className="flex justify-between mb-2">

              <h4 className="font-semibold">
                {item.topic}
              </h4>

              <RiskBadge level={item.risk_impact_level} />

            </div>

            <p className="text-sm text-gray-600">
              {item.why_it_matters}
            </p>

            <p className="text-sm mt-2 text-indigo-600">
              {t("resultCard.suggestion")} {item.suggestion}
            </p>

          </div>

        ))}

      </div>

      {/* Missing clauses */}
      <div className="grid md:grid-cols-2 gap-4">

        <div className="p-4 bg-white rounded-xl shadow">

          <h4 className="font-semibold mb-2">
            {t("resultCard.missing1")}
          </h4>

          <ul className="list-disc ml-4 text-sm text-gray-600">

            {data.missing_important_clauses.contract1_missing.map((c,i)=>(
              <li key={i}>{c}</li>
            ))}

          </ul>

        </div>

        <div className="p-4 bg-white rounded-xl shadow">

          <h4 className="font-semibold mb-2">
            {t("resultCard.missing2")}
          </h4>

          <ul className="list-disc ml-4 text-sm text-gray-600">

            {data.missing_important_clauses.contract2_missing.map((c,i)=>(
              <li key={i}>{c}</li>
            ))}

          </ul>

        </div>

      </div>

      {/* Recommendation */}
      <div className="p-5 bg-white rounded-xl shadow">

        <h3 className="font-semibold mb-2">
          {t("resultCard.recommendation")}
        </h3>

        <ul className="list-disc ml-5 text-gray-600">

          {data.recommendation_summary.map((r,i)=>(
            <li key={i}>{r}</li>
          ))}

        </ul>

      </div>

    </div>

  )

}

export default ResultCard
