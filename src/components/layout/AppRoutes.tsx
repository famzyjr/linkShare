import Login from "../../pages/auth/Login"
import SignUp from "../../pages/auth/SignUp"
import { Route,Routes } from "react-router-dom"
const AuthLayout = () => {
  return (
    <div>
   <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<SignUp />} />
    </Routes>
    </div>
  )
}

export default AuthLayout