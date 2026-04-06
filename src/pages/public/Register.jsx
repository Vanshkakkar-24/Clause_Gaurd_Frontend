import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { registerUser } from "../../services/api";
import Navbar from "../../components/Navbar";
import { GoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../../services/api";

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
  const [accountType, setAccountType] = useState("individual")

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

    }
    catch {

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

      await registerUser({

        account_type: accountType,

        full_name: form.full_name,

        organization_name: form.organization_name || "",

        phone: form.phone,

        email: form.email,

        password: form.password,

        confirm_password: form.confirm_password

      })

      localStorage.setItem(
        "token",
        res.data.access_token
      );

      navigate("/");

    }
    catch {
      alert(t("register.alerts.failed"));
    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

      <Navbar />

      <div className="grid md:grid-cols-2 min-h-[90vh]">

        {/* LEFT SIDE */}

        <div className="hidden md:flex flex-col justify-center px-20">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-white/10 p-2 rounded-lg">
              🛡️
            </div>

            <span className="text-lg font-semibold">
              {t("nav.brand")}
            </span>

          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">

            {t("register.tagline1")}
            <br />
            {t("register.tagline2")}

          </h1>

          <p className="text-slate-300 text-lg">

            {t("register.subtitle")}

          </p>

        </div>



        {/* RIGHT SIDE */}

        <div className="flex items-center justify-center p-6">

          <div className="w-full max-w-md bg-white text-slate-900 rounded-2xl shadow-xl p-8">

            <h2 className="text-2xl font-semibold mb-1">

              {t("register.title")}

            </h2>

            <p className="text-sm text-slate-500 mb-6">

              {t("register.join")}

            </p>


            {/* Full Name */}

            <label className="text-sm font-medium">
              {t("register.fullName")}
            </label>

            <input
              name="full_name"
              placeholder={t("register.placeholders.name")}
              onChange={handleChange}
              className="w-full border mt-1 mb-4 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />


            {/* Phone */}

            <label className="text-sm font-medium">
              {t("register.mobile")}
            </label>

            <input
              name="phone"
              placeholder={t("register.placeholders.phone")}
              onChange={handleChange}
              className="w-full border mt-1 mb-4 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />


            {/* Email */}

            <label className="text-sm font-medium">
              {t("register.email")}
            </label>

            <input
              name="email"
              placeholder={t("register.placeholders.email")}
              onChange={handleChange}
              className="w-full border mt-1 mb-4 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />

            <label>Account Type</label>

            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >

              <option value="individual">

                Individual

              </option>

              <option value="organization">

                Organization

              </option>

            </select>

            <br /><br />


            {/* Password */}

            <label className="text-sm font-medium">
              {t("register.password")}
            </label>

            <input
              type="password"
              name="password"
              placeholder={t("register.placeholders.password")}
              onChange={handleChange}
              className="w-full border mt-1 mb-4 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />


            {/* Confirm Password */}

            <label className="text-sm font-medium">
              {t("register.confirmPassword")}
            </label>

            <input
              type="password"
              name="confirm_password"
              placeholder={t("register.placeholders.confirm")}
              onChange={handleChange}
              className="w-full border mt-1 mb-4 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />


            {/* Terms */}

            <label className="flex items-center gap-2 text-sm mb-4">

              <input
                type="checkbox"
                name="agree"
                onChange={handleChange}
              />

              {t("register.agree")}

            </label>


            {/* Submit */}

            <button
              type="button"
              onClick={handleRegister}
              className="w-full py-2.5 rounded-lg text-white font-medium bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-90"
            >

              {t("register.submit")}

            </button>


            {/* Divider */}

            <div className="text-center text-sm text-slate-400 my-4">

              {t("register.orContinue")}

            </div>


            {/* Google */}

            <div className="flex justify-center">

              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => alert(t("register.googleFail"))}
              />

            </div>


            {/* Login link */}

            <p className="text-sm text-center mt-6">

              {t("register.hasAccount")}

              <Link
                to="/login"
                className="text-indigo-600 font-medium ml-1"
              >

                {t("register.login")}

              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Register;
