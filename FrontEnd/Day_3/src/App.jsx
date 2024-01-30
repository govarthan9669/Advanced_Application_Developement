import SignIn from "./Components/Login/SignIn";
// import  { useEffect } from 'react';

import Dashboard from "./pages/Dashboard"
import{BrowserRouter,Route,Routes} from 'react-router-dom'
// import LoanApplication from "./pages/LoanApplication"
// import Header from "./NavDash/Header"
import EligibleProject from "./screens/EligibleProject";
import Apply from "./screens/Apply"
import AppForm from "./screens/AppForm";
import AboutScheme from "./screens/AboutScheme";
import FundAllocation from "./screens/FundAllocation";
// import LoginSwitch from "./Components/Login/LoginSwitch"
import Resource from "./screens/Resource";
import SignUp from "./Components/Login/SignUp";



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
        
        {/* <Route path="/loan-application" element={<LoanApplication />}/> */}
      </Routes>
    

   
   
    </div>
    </BrowserRouter>
  )
}

export default App
