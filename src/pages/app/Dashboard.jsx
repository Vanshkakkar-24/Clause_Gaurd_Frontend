import { useEffect, useState } from "react"
import { getActivities } from "../../services/api"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {

  const [activities, setActivities] = useState([])
  const navigate = useNavigate()

  const [stats, setStats] = useState({

    total: 0,
    lastActivity: null,
    avgRisk: null

  })

  useEffect(() => {

    loadActivities()

  }, [])


  const loadActivities = async () => {

    try {

      const res = await getActivities()

      setActivities(res.data)

      calculateStats(res.data)

    }
    catch (e) {

      console.log(e)

    }

  }


  const calculateStats = (data) => {

    if (!data.length) return

    let riskScores = data
      .filter(a => a.type === "analyze")
      .map(a => a.result?.overall_risk_score || 0)

    let avgRisk = riskScores.length
      ? Math.round(
          riskScores.reduce((a,b)=>a+b,0)
          / riskScores.length
        )
      : null

    setStats({

      total: data.length,

      lastActivity: data[0]?.created_at,

      avgRisk

    })

  }


  const typeBadge = (type) => {

    if(type==="analyze")
      return "bg-indigo-500/20 text-indigo-300"

    if(type==="simplify")
      return "bg-green-500/20 text-green-300"

    if(type==="compare")
      return "bg-yellow-500/20 text-yellow-300"

    if(type==="negotiate")
      return "bg-pink-500/20 text-pink-300"

    return "bg-slate-500/20"

  }



  return (

    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">

      <h1 className="text-3xl font-semibold">
        Dashboard
      </h1>


      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-slate-900 p-6 rounded-xl border border-white/5">

          <p className="text-sm text-slate-400">
            Total Activities
          </p>

          <p className="text-3xl font-semibold mt-2 text-slate-400">
            {stats.total}
          </p>

        </div>


        <div className="bg-slate-900 p-6 rounded-xl border border-white/5">

          <p className="text-sm text-slate-400">
            Avg Risk Score
          </p>

          <p className="text-3xl font-semibold mt-2 text-slate-400">
            {stats.avgRisk ?? "-"}
          </p>

        </div>


        <div className="bg-slate-900 p-6 rounded-xl border border-white/5">

          <p className="text-sm text-slate-400">
            Last Activity
          </p>

          <p className="text-lg mt-2 text-slate-400">
            {
              stats.lastActivity
              ? new Date(stats.lastActivity).toLocaleDateString()
              : "-"
            }
          </p>

        </div>

      </div>



      {/* QUICK ACTIONS */}

      <div className="grid md:grid-cols-3 gap-4">

        <button
          onClick={()=>navigate("/app/upload")}
          className="
            p-5
            rounded-xl
            bg-gradient-to-r
            from-indigo-600
            to-indigo-500
            hover:opacity-90
            transition
            text-left
          "
        >

          <p className="text-lg font-semibold ">
            Analyze Contract
          </p>

          <p className="text-sm opacity-80 mt-1">
            Upload and detect risky clauses
          </p>

        </button>


        <button
          onClick={()=>navigate("/app/compare")}
          className="
            p-5
            rounded-xl
            bg-gradient-to-r
            from-yellow-600
            to-yellow-500
            hover:opacity-90
            transition
            text-left
          "
        >

          <p className="text-lg font-semibold">
            Compare Contracts
          </p>

          <p className="text-sm opacity-80 mt-1">
            Compare 2 versions of agreement
          </p>

        </button>



        <button
          onClick={()=>navigate("/app/simplify")}
          className="
            p-5
            rounded-xl
            bg-gradient-to-r
            from-green-600
            to-green-500
            hover:opacity-90
            transition
            text-left
          "
        >

          <p className="text-lg font-semibold">
            Simplify Contract
          </p>

          <p className="text-sm opacity-80 mt-1">
            Convert legal text to plain English
          </p>

        </button>

      </div>



      {/* ACTIVITY */}

      <div className="bg-slate-900 rounded-xl border border-white/5">

        <div className="p-6 border-b border-white/5">

          <h2 className="text-xl font-semibold text-slate-400">
            Recent Activity
          </h2>

        </div>


        <div className="divide-y divide-white/5">

          {

            activities.map((a)=>{

              let resultPreview="—"

              if(a.type==="analyze")
                resultPreview=`Risk ${a.result?.overall_risk_score}/10`

              if(a.type==="simplify")
                resultPreview="Simplified"

              if(a.type==="compare")
                resultPreview="Compared"

              if(a.type==="negotiate")
                resultPreview="Email generated"


              return(

                <div
                  key={a._id}
                  onClick={()=>navigate(`/app/activity/${a._id}`)}
                  className="
                    p-4
                    flex
                    justify-between
                    items-center
                    cursor-pointer
                    hover:bg-white/5
                    transition
                  "
                >

                  <div>

                    <p className="font-medium text-slate-400">
                      {a.file_name}
                    </p>

                    <p className="text-sm text-slate-400">

                      {new Date(a.created_at).toLocaleDateString()}

                    </p>

                  </div>



                  <div className="flex items-center gap-4">

                    <span
                      className={`
                        px-2 py-1
                        rounded-md
                        text-xs
                        ${typeBadge(a.type)}
                      `}
                    >

                      {a.type}

                    </span>


                    <span className="text-sm text-slate-300">

                      {resultPreview}

                    </span>

                  </div>


                </div>

              )

            })

          }

        </div>

      </div>


    </div>

  )

}