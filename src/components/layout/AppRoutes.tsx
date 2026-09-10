import Login from "../../pages/auth/Login"
import SignUp from "../../pages/auth/SignUp"
import { Navigate,Route,Routes } from "react-router-dom"
import Dashboard from "../../pages/dashboard/Dashboard"
import Navbar from "./Navbar"
const AuthLayout = () => {
  return (
    <div>
   <Routes>
    <Route path="" element={<Navbar/>}/>
    <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
    </div>
  )
}

export default AuthLayout