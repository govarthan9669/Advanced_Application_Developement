import SignIn from "./Components/Login/SignIn";
import Dashboard from "./pages/Dashboard"
import{BrowserRouter,Route,Routes} from 'react-router-dom'
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



const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/apply" element={<Apply />}/>
        <Route path="/Home" element={<Dashboard />}/>
        <Route path="/form" element={<AppForm />}/>
        <Route path="/aboutScheme" element={<AboutScheme />}/>
        <Route path="/fund" element={<FundAllocation />}/>
        <Route path="/eligibleproject" element={<EligibleProject />}/>
        <Route path="/resource" element={<Resource/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Adminlogin" element={<AdminSignIn/>}/>
        <Route path="/AdminSignUp" element={<AdminSignUp/>}/>
        <Route path="/AdminHome" element={<AdminHomePage/>}/>
        <Route path="/LoanStatus" element={<LoanStatus/>}/>
        <Route path="/ManageLoan" element={<AdminManageLoan/>}/>
        <Route path="/DrawDash" element={<DrawDashboard/>}/>
        
        
      </Routes>
    

   
   
    </div>
    </BrowserRouter>
  )
}

export default App
