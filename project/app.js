


import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Book/Header';
import Register from './Book/Register';
import Login from './Book/Login'
import Signup from './Book/Signup';
function App () {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/Register' element={<Register/>} />
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>

      </Routes>
      </BrowserRouter>
   </>
  )
}export default App
