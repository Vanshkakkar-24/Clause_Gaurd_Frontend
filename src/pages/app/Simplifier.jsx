import { useState } from "react";
import api from "../../services/api";
import Loader from "../../components/Loader";

const Simplifier = () => {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const simplifyText = async () => {

    if (!text) return;

    try {

      setLoading(true);

      const res = await api.post("/simplify", {

        text

      });

      setResult(res.data.simplified_text);

    }
    catch {

      alert("Failed to simplify");

    }
    finally {

      setLoading(false);

    }

  };

  return (

    <div>

      <h1 className="text-2xl font-semibold mb-6">

        Simplify Legal Text

      </h1>

      <textarea
        rows={6}
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Paste legal clause..."
        className="w-full border rounded-lg p-3 mb-4"
      />

      <button
        onClick={simplifyText}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg"
      >

        Simplify

      </button>

      {loading && <Loader />}

      {result && (

        <div className="mt-6 p-4 border rounded-lg bg-gray-50">

          {result}

        </div>

      )}

    </div>

  );

};

export default Simplifier;