
import { Homepage } from './components/homepage/Homepage'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import {Routes,Route} from "react-router-dom"
import { Product } from './components/productpage/Product'
import './App.css'
import { useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

function App() {
  // const theme = useState({})
  
  
  // const [user,setLoginuser]=useState({})
  return (
    <div className="App">
        <Routes>
     
       {/* <Route exact path="/" element={<Footer />}></Route>   */}
    <Route exact path="/" element={<Homepage/>}></Route>  
    {/* <Route exact path="/" element={user && user._id ? <Homepage setLoginuser={setLoginuser}/> : <Login setLoginuser={setLoginuser}/>}></Route> */}
    <Route path="/login" element={<Login  />}></Route>
    <Route path="/register"element={<Register/>} ></Route>
    <Route path="/product" element={<Product/>}></Route>
        </Routes>
     

    </div>
  )
}

export default App
