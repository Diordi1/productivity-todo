import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Hello from './Hello'
import Home from './Home'
import Footer from './Footer'
import Header from './Header'
import  LoginContextProvider  from './logincontext'
import CheckAuth from './checkAuthe'
import Todos from './Todos'
import Addtodo from './Addtodo'
import Add from './add'
import Signup from './Signup'
import OtpVerification from './verifyOtp'
function App() {
  

  return (
    <div>

     <BrowserRouter>

     <LoginContextProvider>
      <Header/>
     <Routes>
      
      <Route path="/test" element={
        <CheckAuth>
          <Hello/>
          </CheckAuth>

        
        }></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/todo/" element={<Todos/>}></Route>
      <Route path="/addtodo/:id" element={<Addtodo/>}></Route>
      <Route path="/addtodo" element={<Add/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/verify" element={<OtpVerification/>}></Route>
     </Routes>
     </LoginContextProvider>
     <Footer/>
     </BrowserRouter>
     </div>
    
  )
}

export default App
