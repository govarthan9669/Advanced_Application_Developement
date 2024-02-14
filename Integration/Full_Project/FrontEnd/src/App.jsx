import SignIn from "./Components/Login/SignIn";
import Dashboard from "./pages/Dashboard"
import{Route,Routes} from 'react-router-dom'
import EligibleProject from "./screens/EligibleProject";
import Apply from "./screens/Apply"
import AppForm from "./screens/AppForm";
import AboutScheme from "./screens/AboutScheme";
import FundAllocation from "./screens/FundAllocation";
import Resource from "./screens/Resource";
import SignUp from "./Components/Login/SignUp";
import AdminSignIn from "./Components/Login/AdminSignIn";
import AdminSignUp from "./Components/Login/AdminSignUp";
import AdminHomePage from "./AdminSide/AdminHomePage";
import LoanStatus from "./screens/LoanStatus";
import AdminManageLoan from "./screens/AdminManageLoan";
import DrawDashboard from "./screens/DrawDashboard";
import { useSelector } from "react-redux";
import UserDashboard from "./screens/UserDashboard";
import ForbiddenPage from "./screens/ForbiddenPage";



const App = () => {

  const {role} = useSelector(state => state.master);


  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard role={role} />}/>
        <Route path="/apply" element={<Apply role={role}  />}/>
        <Route path="/Home" element={<Dashboard role={role}  />}/>
        <Route path="/form" element={<AppForm role={role} />}/>
        <Route path="/aboutScheme" element={<AboutScheme role={role} />}/>
        <Route path="/fund" element={<FundAllocation role={role} />}/>
        <Route path="/eligibleproject" element={<EligibleProject role={role} />}/>
        <Route path="/resource" element={<Resource role={role} />}/>
        <Route path="/login" element={<SignIn role={role} />}/>
        <Route path="/SignUp" element={<SignUp role={role} />}/>
        <Route path="/Adminlogin" element={<AdminSignIn role={role} />}/>
        <Route path="/AdminSignUp" element={<AdminSignUp role={role} />}/>
        <Route path="/AdminHome" element={<AdminHomePage role={role} />}/>
        <Route path="/LoanStatus" element={<LoanStatus role={role} />}/>
        <Route path="/ManageLoan" element={<AdminManageLoan role={role} />}/>
        <Route path="/DrawDash" element={<DrawDashboard role={role} />}/>
        <Route path="/UserDash" element={<UserDashboard role={role} />}/>
        {/* <Route path="/page" element={<ForbiddenPage role={role} />}/> */}
      </Routes>
    </>
  )
}

export default App
