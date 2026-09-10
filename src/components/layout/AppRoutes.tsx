import Login from "../../pages/auth/Login"
import SignUp from "../../pages/auth/SignUp"
import { Navigate,Route,Routes } from "react-router-dom"
const AuthLayout = () => {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </div>
  )
}

export default AuthLayout