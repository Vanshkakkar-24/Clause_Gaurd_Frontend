import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import Loader from "../../components/Loader"
import ResultCard from "../../components/ResultCard"
import ReactMarkdown from "react-markdown"
import API from "../../services/api"

export default function ActivityDetails(){

  const { id } = useParams()

  const [activity,setActivity] = useState(null)

  useEffect(()=>{
    load()
  },[])


  const load = async()=>{

    try{

      const res = await API.get(`/auth/activity/${id}`)

      setActivity(res.data)

    }
    catch(e){

      console.log(e)

    }

  }


  if(!activity){

    return(

      <div className="p-10">

        <Loader/>

      </div>

    )

  }


  const result = activity.result


  return(

    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">

      {/* HEADER */}

      <div>

        <h1 className="text-2xl font-semibold">

          {activity.file_name}

        </h1>

        <p className="text-sm text-gray-400 mt-1">

          {activity.type} • {new Date(activity.created_at).toLocaleString()}

        </p>

      </div>



      {/* ANALYZE RESULT */}

      {

        activity.type === "analyze" && result && (

          <>

            {/* OVERVIEW */}

            <div className="bg-slate-900 p-6 rounded-xl">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-sm text-gray-400">

                    Contract Type

                  </p>

                  <p className="font-semibold">

                    {result.contract_overview.contract_type}

                  </p>

                </div>

                <div>

                  <p className="text-sm text-gray-400">

                    Risk Score

                  </p>

                  <p className="text-xl font-bold">

                    {result.overall_risk_score}/10

                  </p>

                </div>

              </div>

              <p className="mt-4 text-gray-300">

                {result.summary}

              </p>

            </div>


            {/* RISK BREAKDOWN */}

            <div className="grid md:grid-cols-4 gap-4">

              {

                Object.entries(result.risk_breakdown || {}).map(([key,val])=>(

                  <div
                    key={key}
                    className="bg-slate-900 p-4 rounded-lg"
                  >

                    <p className="text-sm text-gray-400">

                      {key.replaceAll("_"," ")}

                    </p>

                    <p className="text-lg font-semibold">

                      {val}/10

                    </p>

                  </div>

                ))

              }

            </div>


            {/* CLAUSES */}

            <div className="space-y-4">

              {

                result.risky_clauses?.map((clause,i)=>(

                  <div
                    key={i}
                    className="bg-slate-900 p-5 rounded-xl"
                  >

                    <div className="flex justify-between">

                      <h3 className="font-semibold">

                        {clause.clause_title}

                      </h3>

                      <span className="text-xs">

                        {clause.risk_level}

                      </span>

                    </div>

                    <p className="mt-2 text-sm text-gray-300">

                      {clause.explanation}

                    </p>

                    <p className="mt-3 text-sm">

                      <b>Suggestion:</b> {clause.suggestion}

                    </p>

                  </div>

                ))

              }

            </div>

          </>

        )

      }



      {/* SIMPLIFY RESULT */}

      {

        activity.type === "simplify" && result && (

          <>

            <div className="bg-slate-900 p-6 rounded-xl">

              <p>

                {result.summary}

              </p>

            </div>


            <div className="space-y-5">

              {

                result.simplified_clauses?.map((clause,i)=>(

                  <div
                    key={i}
                    className="bg-slate-900 p-5 rounded-xl"
                  >

                    <h3 className="font-semibold text-indigo-400">

                      {clause.clause_title}

                    </h3>

                    <p className="mt-2 text-sm text-gray-400">

                      Original clause

                    </p>

                    <p className="text-gray-300 whitespace-pre-line">

                      {clause.original_clause}

                    </p>

                    <p className="mt-3 text-sm text-gray-400">

                      Simplified explanation

                    </p>

                    <p className="text-gray-300">

                      {clause.simplified_explanation}

                    </p>

                  </div>

                ))

              }

            </div>

          </>

        )

      }



      {/* COMPARE RESULT */}

      {

        activity.type === "compare" && result && (

          <ResultCard data={result} />

        )

      }



      {/* NEGOTIATE RESULT */}

      {

        activity.type === "negotiate" && result && (

          <div className="bg-slate-900 p-6 rounded-xl">

            <p className="text-sm text-gray-400">

              Subject

            </p>

            <h2 className="font-semibold mb-4">

              {result.subject}

            </h2>

            <ReactMarkdown>

              {result.email_body}

            </ReactMarkdown>

          </div>

        )

      }


    </div>

  )

}