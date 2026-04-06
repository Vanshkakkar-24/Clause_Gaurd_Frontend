import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google";

import PrivateRoute from "./routes/PrivateRoute"
import AppLayout from "./layouts/AppLayout"

import Home from "./pages/public/Home"
import Login from "./pages/public/Login"
import Register from "./pages/public/Register"

import Upload from "./pages/app/Upload"
import Analysis from "./pages/app/Analysis"
import Compare from "./pages/app/Compare"
import Chat from "./pages/app/Chat"
import Negotiate from "./pages/app/Negotiate"
import Simplifier from "./pages/app/Simplifier"
import History from "./pages/app/History"
import Settings from "./pages/app/Settings"
import Dashboard from "./pages/app/Dashboard"
import ActivityDetails from "./pages/app/ActivityDetails"
import Redraft from "./pages/app/Redraft"

function App() {

  return (

    <GoogleOAuthProvider clientId="964790682223-ukg7l37gnjqibdfnh1rdudkkudmpv13u.apps.googleusercontent.com">

      <BrowserRouter>

        <Routes>

          {/* public */}

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />


          {/* private */}

          <Route element={<PrivateRoute />}>

            <Route element={<AppLayout />}>

              <Route path="/app/upload" element={<Upload />} />

              <Route path="/app/analysis" element={<Analysis />} />

              <Route path="/app/compare" element={<Compare />} />

              <Route path="/app/chat" element={<Chat />} />

              <Route path="/app/negotiate" element={<Negotiate />} />

              <Route path="/app/simplify" element={<Simplifier />} />

              <Route path="/app/history" element={<History />} />

              <Route path="/app/settings" element={<Settings />} />

              <Route path="/app/dashboard" element={<Dashboard />} />

              <Route path="/app/activity/:id" element={<ActivityDetails />} />

              <Route path="/app/redraft" element={<Redraft />} />

            </Route>

          </Route>

        </Routes>

      </BrowserRouter>

    </GoogleOAuthProvider>

  )

}

export default App