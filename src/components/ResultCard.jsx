import { useTranslation } from "react-i18next";

const RiskBadge = ({ level }) => {
  const { t } = useTranslation();
  
  const colors = {
    Low: "bg-[#0a2221] text-ethereal-brand border-[#113333]",
    Medium: "bg-[#2a1a08] text-[#fbbf24] border-[#4a2a08]",
    High: "bg-[#2a080c] text-[#ef4444] border-[#4a0812]"
  }

  return (
    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest border ${colors[level] || "bg-ethereal-surface text-ethereal-text"}`}>
      {t(`riskLevel.${level}`, { defaultValue: level })}
    </span>
  )
}

const ResultCard = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start relative w-full h-full">

      {/* Left Area (Simulation of the Side-by-Side Document) */}
      <div className="flex-1 w-full bg-[#030a0a] rounded-xl border border-ethereal-border p-6 font-sans">
        
        {/* Header simulation */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-ethereal-border/50">
          <div className="flex items-center gap-4">
             <h2 className="text-lg font-semibold text-white">MSA_Service_Agreement_v4.2</h2>
             <span className="bg-ethereal-brand/20 text-ethereal-brandLight text-[10px] uppercase px-2 py-0.5 rounded font-bold">Draft</span>
             <span className="text-[#ef4444] text-[10px] font-bold ml-2">3 VULNERABILITIES</span>
          </div>
          <div className="flex gap-4">
             <button className="text-ethereal-textMuted text-xs flex items-center gap-1"><span className="text-[10px]">⇄</span> Sync Scroll</button>
             <button className="text-ethereal-textMuted text-xs flex items-center gap-1"><span className="text-[10px]">↓</span> Export PDF</button>
          </div>
        </div>

        {/* Fake columns for side by side */}
        <div className="grid md:grid-cols-2 gap-8 text-[13px] leading-relaxed text-ethereal-textMuted">
          <div>
            <div className="text-[10px] uppercase tracking-wider mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#455a58]"></span> VERSION A (BASELINE)</div>
            
            <div className="mb-6">
              <h3 className="text-ethereal-brandLight font-semibold mb-2">Risk Summary</h3>
              <div className="bg-[#061515] border border-ethereal-border p-4 rounded-lg">
                <RiskBadge level={data.risk_summary.contract1_level} />
                <p className="mt-2 text-white">Risk Score: {data.contract1_risk_score}</p>
              </div>
            </div>

            <div className="mb-6 pb-6 border-b border-ethereal-border/30">
               <h3 className="text-ethereal-brandLight font-semibold mb-2 mt-4">General Overview</h3>
               <p className="text-[#a1b0b0]">
                 {data.summary}
               </p>
            </div>

            {/* Render misses for Contract 1 */}
            <div>
               <h3 className="text-[#ef4444] font-semibold mb-2 mt-4">Missing Clauses</h3>
               <ul className="list-disc pl-4 space-y-1 text-[#ef4444]/80">
                 {data.missing_important_clauses.contract1_missing.map((c,i)=>(
                    <li key={i}>{c}</li>
                 ))}
               </ul>
            </div>

          </div>

          <div>
             <div className="text-[10px] uppercase tracking-wider mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-ethereal-brandLight"></span> VERSION B (REVISED)</div>
             
             <div className="mb-6">
               <h3 className="text-ethereal-brandLight font-semibold mb-2">Risk Summary</h3>
               <div className="bg-[#061515] border border-ethereal-border p-4 rounded-lg">
                 <RiskBadge level={data.risk_summary.contract2_level} />
                 <p className="mt-2 text-white">Risk Score: {data.contract2_risk_score}</p>
               </div>
             </div>

             <div className="mb-6 pb-6 border-b border-ethereal-border/30">
               <h3 className="text-ethereal-brandLight font-semibold mb-2 mt-4">Verdict</h3>
               <p className="text-[#a1b0b0]">
                 Better Contract: <span className="text-white font-medium">{data.better_contract}</span>
               </p>
             </div>

             {/* Render misses for Contract 2 */}
            <div>
               <h3 className="text-[#ef4444] font-semibold mb-2 mt-4">Missing Clauses</h3>
               <ul className="list-disc pl-4 space-y-1 text-[#ef4444]/80">
                 {data.missing_important_clauses.contract2_missing.map((c,i)=>(
                    <li key={i}>{c}</li>
                 ))}
               </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Right Sidebar (Legal Insight Lab simulation) */}
      <div className="w-full lg:w-80 flex flex-col gap-4 sticky top-6">
        
        <div className="bg-[#061515] border border-ethereal-border p-5 rounded-xl">
           <div className="flex items-center gap-2 text-ethereal-brandLight font-semibold mb-4 text-sm">⚡ Legal Insight Lab</div>
           <div>
              <div className="flex justify-between text-[11px] text-ethereal-textMuted mb-2"><span>AI Scan Completeness</span><span>100% ANALYZED</span></div>
              <div className="h-1 bg-[#1a3a3a] rounded-full overflow-hidden mb-2">
                 <div className="bg-ethereal-brand h-full w-full"></div>
              </div>
           </div>
        </div>

        {/* Map real differences into Insight Cards */}
        {data.key_differences.map((item, index) => (
          <div key={index} className="bg-[#061515] border border-ethereal-border p-5 rounded-xl">
            <div className="flex justify-between items-start mb-3">
              <RiskBadge level={item.risk_impact_level} />
            </div>
            <h4 className="text-white font-semibold text-[13px] mb-2">{item.topic}</h4>
            <p className="text-[12px] text-ethereal-textMuted mb-4">
              {item.why_it_matters}
            </p>
            <div className="flex gap-2">
               <button className="flex-1 bg-ethereal-surface hover:bg-[#153a39] transition text-ethereal-textMuted hover:text-white text-[11px] font-bold uppercase tracking-widest py-2 rounded">
                 Revert
               </button>
               <button className="flex-1 bg-ethereal-brand/10 hover:bg-ethereal-brand/20 transition border border-ethereal-brand/30 text-ethereal-brandLight text-[11px] font-bold uppercase tracking-widest py-2 rounded">
                 Suggest
               </button>
            </div>
          </div>
        ))}

        <div className="bg-[#061515] border border-ethereal-border p-5 rounded-xl mt-2">
          <h4 className="text-[13px] font-semibold text-white mb-3">AI Recommendations</h4>
          <ul className="list-disc pl-4 text-[12px] text-ethereal-textMuted space-y-2">
            {data.recommendation_summary.map((r,i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <button className="w-full mt-4 py-2.5 rounded text-[11px] font-bold uppercase tracking-widest bg-[#0a2221] border border-ethereal-brand/30 text-ethereal-brandLight hover:bg-ethereal-brand hover:text-[#041010] transition">
            💬 AI Drafting Assistant
          </button>
        </div>

      </div>

    </div>
  )
}

export default ResultCard
