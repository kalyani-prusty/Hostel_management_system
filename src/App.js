import React from 'react'
import Navbar from './Layout/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Fees from './components/Fees'
import Registration from './components/Registration'
import About from './components/About'
import Facilities from './components/Facilities'
import Contact from './components/Contact'
export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
            <Routes>
               <Route path='/' element={<Home/>}>Home</Route>
               <Route path='/login' element={<Login/>}>Login</Route>
               <Route path='rgister' element={<Registration/>}>Login</Route>
               <Route path='/about' element={<About/>}>About</Route>
               <Route path='/fees' element={<Fees/>}>Fees</Route>
               <Route path='/facilities' element={<Facilities/>}>Facilities</Route>
               <Route path='/contact' element={<Contact/>}>Contact</Route>
            </Routes>
        
        </BrowserRouter>
      
      
    </div>
  )
}
