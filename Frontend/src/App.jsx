// import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import UserStatus from './Componenets/UserStatus'
import UserApply from './Componenets/UserApply'
import Profile from './Componenets/Profile'
import AdminDetails from './Admin/AdminDetails'
import AdminAccept  from './Admin/AdminAccept'
import NavBar from './NavBar';

import Login from './Componenets/Login';

import SignUp from './Componenets/SignUp';
import Profile1 from './Componenets/Profile1'
import AdminHome from './Admin/AdminHome';
import  LoanStatus from './Admin/LoanStatus'
import SchemeDetails from './Admin/SchemeDetails';
import AdminProfile from './Admin/AdminProfile'

// import AdminCustomer from './Admin/AdminCustomer'
// import Payment from '../src/Payment';
import AdminLogin from './Componenets/AdminLogin';
// import Course from './Componenets/Course';
import Landing from './Componenets/Landing';
import GetUserDetails from './Admin/GetUserDetails';
import GetCourseDetails from './Admin/GetCourseDetails';
function App() {
  

  return (
    <BrowserRouter>
      <div>
          
          {/* <Login/> */}
          {/* <Signup/> */}
          
        <Routes>
          
          <Route path="/home" element={<Landing/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/admin" element={<AdminLogin/>}/>

          <Route path="/user" element={<GetUserDetails/>}/>
          <Route path="/coursee" element={<GetCourseDetails/>}/>

          <Route path="/nav" element={<NavBar/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        
          <Route path="/status" element={<UserStatus/>}/>
          <Route path="/loan" element={<UserApply/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/pro" element={<Profile1/>}/>
          <Route path='/adminHome'element={<AdminHome/>}></Route>
          <Route path="/details" element={<AdminDetails/>}/>
          <Route path="/accept" element={<AdminAccept/>}/>
          <Route path="/loanStatus" element={<LoanStatus/>}/>
          <Route path="/schemes" element={<SchemeDetails/>}/>
          <Route path="/adminProfile" element={<AdminProfile/>}/>
          {/* <Route path="/customers" element={<AdminCustomer/>}/> */}
          {/* <Route path="/payment" element={<Payment/>}/> */}
        </Routes>
        
      </div>
      </BrowserRouter>
  
  
  )
}

export default App
