import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../services/api";
import Navbar from "../../components/Navbar";
import { GoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../../services/api";

const Register = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
    agree: false
  });

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

      alert("Google signup failed");

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
      alert("Please accept Terms");
      return;
    }

    if (form.password !== form.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    try {

      await registerUser({
        full_name: form.full_name,
        phone: form.phone,
        email: form.email,
        password: form.password,
        confirm_password: form.confirm_password
      });

      navigate("/");

    }
    catch {
      alert("Registration failed");
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
              ContractIQ
            </span>

          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">

            Start Protecting
            <br />
            Yourself Today.

          </h1>

          <p className="text-slate-300 text-lg">

            Create a free account and analyze your first contract in under 60 seconds.

          </p>

        </div>



        {/* RIGHT SIDE */}

        <div className="flex items-center justify-center p-6">

          <div className="w-full max-w-md bg-white text-slate-900 rounded-2xl shadow-xl p-8">

            <h2 className="text-2xl font-semibold mb-1">

              Create Your Free Account

            </h2>

            <p className="text-sm text-slate-500 mb-6">

              Join 12,000+ professionals

            </p>


            {/* Full Name */}

            <label className="text-sm font-medium">
              Full Name
            </label>

            <input
              name="full_name"
              placeholder="John Doe"
              onChange={handleChange}
              className="w-full border mt-1 mb-4 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />


            {/* Phone */}

            <label className="text-sm font-medium">
              Mobile
            </label>

            <input
              name="phone"
              placeholder="9876543210"
              onChange={handleChange}
              className="w-full border mt-1 mb-4 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />


            {/* Email */}

            <label className="text-sm font-medium">
              Email
            </label>

            <input
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
              className="w-full border mt-1 mb-4 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />


            {/* Password */}

            <label className="text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              onChange={handleChange}
              className="w-full border mt-1 mb-4 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />


            {/* Confirm Password */}

            <label className="text-sm font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirm_password"
              placeholder="Repeat password"
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

              I agree to Terms & Privacy Policy

            </label>


            {/* Submit */}

            <button
              onClick={handleRegister}
              className="w-full py-2.5 rounded-lg text-white font-medium bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-90"
            >

              Create Account

            </button>


            {/* Divider */}

            <div className="text-center text-sm text-slate-400 my-4">

              — or continue with —

            </div>


            {/* Google */}

            <div className="flex justify-center">

              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => alert("Google signup failed")}
              />

            </div>


            {/* Login link */}

            <p className="text-sm text-center mt-6">

              Already have account?

              <Link
                to="/login"
                className="text-indigo-600 font-medium ml-1"
              >

                Login

              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Register;