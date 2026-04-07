import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { registerUser, googleAuth } from "../../services/api";
import { GoogleLogin } from "@react-oauth/google";

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
    agree: false
  });
  const [accountType, setAccountType] = useState("Individual");

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await googleAuth(credentialResponse.credential);
      localStorage.setItem("token", res.data.access_token);
      navigate("/");
    } catch {
      alert(t("register.googleFail"));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleRegister = async () => {
    if (!form.agree) {
      alert(t("register.alerts.terms"));
      return;
    }
    if (form.password !== form.confirm_password) {
      alert(t("register.alerts.passwordMatch"));
      return;
    }
    try {
      // simulate the res object for this code to work since original code had a bug where it referenced `res` un-declared.
      const res = await registerUser({
        account_type: accountType,
        full_name: form.full_name,
        organization_name: "",
        phone: form.phone,
        email: form.email,
        password: form.password,
        confirm_password: form.confirm_password
      });

      if(res?.data?.access_token) {
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("userType", accountType);
      }
      navigate("/");
    } catch {
      alert(t("register.alerts.failed"));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#061515] via-[#041010] to-[#020808] text-ethereal-text relative overflow-x-hidden font-sans">
      
      {/* Header outside */}
      <div className="absolute top-6 left-8">
        <h1 className="text-xl font-semibold tracking-wide text-ethereal-brand">
          Clause Gaurd
        </h1>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ethereal-brand/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-ethereal-brandDark/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative w-full max-w-[420px] px-6 z-10 flex flex-col items-center my-12">
        {/* card */}
        <div className="w-full bg-[#081e1d]/80 backdrop-blur-xl border border-ethereal-border shadow-2xl rounded-[24px] p-8 pb-10">
          
          {/* heading inside card */}
          <div className="text-center mb-8">
            <h2 className="text-[26px] font-semibold text-ethereal-text mb-2">
              Join the Evolution
            </h2>
            <p className="text-ethereal-textMuted text-[13px]">
              Experience intelligence refined.
            </p>
          </div>

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
              onClick={() => setAccountType("Organization")}
              className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
                accountType === "Organization"
                  ? "bg-ethereal-brand text-[#041010]"
                  : "text-ethereal-textMuted hover:text-ethereal-text"
              }`}
            >
              Organization
            </button>
          </div>

          <div className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-semibold tracking-widest text-[#6c8684] uppercase mb-2">
                FULL NAME
              </label>
              <div className="bg-black/40 rounded-xl px-4 py-3 border border-ethereal-border focus-within:border-ethereal-brand/50 transition flex items-center gap-3">
                <span className="text-[#6c8684]">👤</span>
                <input
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-transparent outline-none w-full text-[14px] text-ethereal-text placeholder:text-[#455a58]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[11px] font-semibold tracking-widest text-[#6c8684] uppercase mb-2">
                EMAIL ADDRESS
              </label>
              <div className="bg-black/40 rounded-xl px-4 py-3 border border-ethereal-border focus-within:border-ethereal-brand/50 transition flex items-center gap-3">
                <span className="text-[#6c8684]">@</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@ethereal.ai"
                  className="bg-transparent outline-none w-full text-[14px] text-ethereal-text placeholder:text-[#455a58]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[11px] font-semibold tracking-widest text-[#6c8684] uppercase mb-2">
                PASSWORD
              </label>
              <div className="bg-black/40 rounded-xl px-4 py-3 border border-ethereal-border focus-within:border-ethereal-brand/50 transition flex items-center gap-3">
                <span className="text-[#6c8684]">🔒</span>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-transparent outline-none w-full text-[14px] text-ethereal-text placeholder:text-[#455a58]"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[11px] font-semibold tracking-widest text-[#6c8684] uppercase mb-2">
                CONFIRM PASSWORD
              </label>
              <div className="bg-black/40 rounded-xl px-4 py-3 border border-ethereal-border focus-within:border-ethereal-brand/50 transition flex items-center gap-3">
                <span className="text-[#6c8684]">🛡️</span>
                <input
                  type="password"
                  name="confirm_password"
                  value={form.confirm_password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-transparent outline-none w-full text-[14px] text-ethereal-text placeholder:text-[#455a58]"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleRegister}
                className="w-full py-3.5 rounded-xl text-[14px] font-semibold bg-gradient-to-r from-[#5eead4] to-[#2dd4bf] text-[#041010] shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition flex items-center justify-center gap-2"
              >
                Register as {accountType} →
              </button>
            </div>

          </div>

          {/* Login link */}
          <p className="text-center text-[13px] text-ethereal-textMuted mt-6 mb-4">
            Already have an account?
            <Link
              to="/login"
              className="text-ethereal-brand font-medium ml-1.5 hover:text-ethereal-brandLight transition"
            >
              Login
            </Link>
          </p>

          <div className="flex items-center gap-4 my-4">
            <div className="h-px flex-1 bg-ethereal-border/50"></div>
            <span className="text-[10px] font-semibold text-[#455a58] tracking-widest uppercase">
              LEGAL
            </span>
            <div className="h-px flex-1 bg-ethereal-border/50"></div>
          </div>

          <label className="flex items-center justify-center gap-2 text-[11px] text-ethereal-textMuted mt-4 cursor-pointer">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="accent-ethereal-brand"
            />
            <span>By registering, you agree to our Terms and Privacy Policy.</span>
          </label>

        </div>

        {/* Small badges below card */}
        <div className="flex items-center gap-6 mt-8 text-ethereal-textMuted opacity-50">
          <span>✓</span>
          <span>🛡️</span>
          <span>∞</span>
        </div>
      </div>
      
      {/* footer */}
      <div className="w-full mt-auto py-8 px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between text-[12px] text-ethereal-textMuted border-t border-ethereal-border/30 bg-[#041010]">
        <div className="mb-4 md:mb-0">
          © 2024 EClause Gaurd. All rights reserved.
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

export default Register;
