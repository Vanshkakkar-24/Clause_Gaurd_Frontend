import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { loginUser, googleAuth } from "../../services/api";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("Individual");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("userType", res.data.account_type);
      navigate("/");
    } catch {
      alert(t("login.invalid"));
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await googleAuth(credentialResponse.credential);
      localStorage.setItem("token", res.data.access_token);
      navigate("/");
    } catch {
      alert(t("login.googleFail"));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#061515] via-[#041010] to-[#020808] text-ethereal-text relative overflow-hidden font-sans">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ethereal-brand/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-ethereal-brandDark/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative w-full max-w-[420px] px-6 z-10 flex flex-col items-center">
        {/* heading */}
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-semibold tracking-wide text-ethereal-brand mb-2">
            Clause Guard Login
          </h1>
          <p className="text-ethereal-textMuted text-sm">
            Welcome back! Please enter your credentials
          </p>
        </div>

        {/* card */}
        <div className="w-full bg-[#081e1d]/80 backdrop-blur-xl border border-ethereal-border shadow-2xl rounded-[24px] p-8">
          
          {/* Account Type Toggle */}
          <div className="flex bg-[#0a2221] rounded-full p-1 border border-ethereal-border mb-8">
            <button
              onClick={() => setAccountType("Individual")}
              className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
                accountType === "Individual"
                  ? "bg-ethereal-brand text-[#041010]"
                  : "text-ethereal-textMuted hover:text-ethereal-text"
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setAccountType("Organizer")}
              className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
                accountType === "Organizer"
                  ? "bg-ethereal-brand text-[#041010]"
                  : "text-ethereal-textMuted hover:text-ethereal-text"
              }`}
            >
              Organizer
            </button>
          </div>

          {/* email */}
          <label className="block text-[11px] font-semibold tracking-widest text-[#6c8684] uppercase mb-2">
            EMAIL ADDRESS
          </label>
          <div className="mb-6 bg-black/40 rounded-xl px-4 py-3.5 border border-ethereal-border focus-within:border-ethereal-brand/50 transition flex items-center gap-3">
            <span className="text-[#6c8684]">✉</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="bg-transparent outline-none w-full text-[15px] text-ethereal-text placeholder:text-[#455a58]"
            />
          </div>

          {/* password */}
          <div className="flex justify-between items-center mb-2">
            <label className="block text-[11px] font-semibold tracking-widest text-[#6c8684] uppercase">
              PASSWORD
            </label>
            <span className="text-[12px] font-medium text-ethereal-textMuted hover:text-ethereal-brand transition cursor-pointer">
              Forgot Password?
            </span>
          </div>
          <div className="mb-8 bg-black/40 rounded-xl px-4 py-3.5 border border-ethereal-border focus-within:border-ethereal-brand/50 transition flex items-center gap-3">
             <span className="text-[#6c8684]">🔒</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-transparent outline-none w-full text-[15px] text-ethereal-text placeholder:text-[#455a58]"
            />
          </div>

          {/* login button */}
          <button
            onClick={handleLogin}
            className="w-full py-3.5 rounded-xl text-[15px] font-semibold bg-gradient-to-r from-[#5eead4] to-[#2dd4bf] text-[#041010] shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition"
          >
            Login
          </button>

          {/* OR */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 bg-ethereal-border/50"></div>
            <span className="text-[11px] font-medium text-[#455a58] tracking-widest uppercase">
              OR
            </span>
            <div className="h-px flex-1 bg-ethereal-border/50"></div>
          </div>

          {/* google login custom button overlay */}
          <div className="relative w-full mb-8">
            <div className="absolute inset-0 opacity-0 z-10 w-full overflow-hidden flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => alert(t("login.googleFail"))}
                type="standard"
                theme="filled_black"
                size="large"
                width="100%"
              />
            </div>
            {/* Custom UI Button */}
            <button className="w-full py-3.5 rounded-xl text-[14px] font-medium border border-ethereal-border bg-[#0a2221] hover:bg-[#0d2a29] transition flex items-center justify-center gap-2">
              <span className="text-ethereal-text">👤</span>
              Continue as {accountType}
            </button>
          </div>

          {/* register */}
          <p className="text-center text-[13px] text-ethereal-textMuted">
            Don't have an account?
            <Link
              to="/register"
              className="text-ethereal-brand font-medium ml-1.5 hover:text-ethereal-brandLight transition"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
      
      {/* footer */}
      <div className="w-full mt-auto py-8 px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between text-[12px] text-ethereal-textMuted border-t border-ethereal-border/30 bg-[#041010]">
        <div className="mb-4 md:mb-0">
          © 2024 Clause Gaurd. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <span className="hover:text-ethereal-text cursor-pointer transition">Privacy Policy</span>
          <span className="hover:text-ethereal-text cursor-pointer transition">Terms of Service</span>
          <span className="hover:text-ethereal-text cursor-pointer transition">Security</span>
          <span className="hover:text-ethereal-text cursor-pointer transition">Status</span>
        </div>
      </div>
    </div>
  );
};

export default Login;