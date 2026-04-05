import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, googleAuth } from "../../services/api";
import { GoogleLogin } from "@react-oauth/google";
import Navbar from "../../components/Navbar";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const res = await loginUser({
        email,
        password
      });

      localStorage.setItem(
        "token",
        res.data.access_token
      );

      navigate("/");

    } catch {

      alert("Invalid credentials");

    }

  };


  const handleGoogleSuccess = async (credentialResponse) => {

    try {

      const res = await googleAuth(
        credentialResponse.credential
      );

      localStorage.setItem(
        "token",
        res.data.access_token
      );

      navigate("/");

    } catch {

      alert("Google login failed");

    }

  };


  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

      <Navbar />

      <div className="grid md:grid-cols-2 min-h-[90vh]">

        <div className="hidden md:flex flex-col justify-center px-20">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-white/10 p-2 rounded-lg">

              🛡️

            </div>

            <span className="text-lg font-semibold">

              ContractIQ

            </span>

          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">

            Smart Contracts.
            <br />
            Smarter Decisions.

          </h1>

          <p className="text-slate-300 text-lg">

            AI powered contract intelligence

          </p>

        </div>



        <div className="flex items-center justify-center p-6">

          <div className="w-full max-w-md bg-white text-slate-900 rounded-2xl shadow-xl p-8">

            <h2 className="text-2xl font-semibold mb-1">

              Welcome Back

            </h2>

            <p className="text-sm text-slate-500 mb-6">

              Log in to continue

            </p>


            <label className="text-sm font-medium">

              Email

            </label>

            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border mt-1 mb-4 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />


            <label className="text-sm font-medium">

              Password

            </label>

            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full border mt-1 mb-6 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />


            <button
              onClick={handleLogin}
              className="w-full py-2.5 rounded-lg text-white font-medium bg-gradient-to-r from-indigo-500 to-indigo-600"
            >

              Log In

            </button>


            <div className="text-center text-sm text-slate-400 my-4">

              OR

            </div>


            <div className="flex justify-center">

              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => alert("Google login failed")}
              />

            </div>


            <p className="text-sm text-center mt-6">

              No account?

              <Link
                to="/register"
                className="text-indigo-600 font-medium ml-1"
              >

                Register

              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Login;