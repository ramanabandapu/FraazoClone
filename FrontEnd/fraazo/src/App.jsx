import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import {Route,Routes} from "react-router-dom"
import {Home} from "./Components/Home"
import {Vegitable} from "./Components/Vegitable"
import {Fruits} from "./Components/Fruits"
import { FruitDetail } from './Components/FruitDetail'
import {VegitableDetail} from "./Components/VegitableDetail"
import { Navbar } from './Components/NavBar'
import { CartPage } from './Components/CartPage'
import { Login } from './Components/Login'
import { Footer } from './Components/Footer'
import {Checkout} from "./Components/Checkout"
import {Thankyou} from "./Components/Thankyou"
import { Register } from './Components/Register'


function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/fruits" element={<Fruits/>}></Route>
        <Route path="/fruits/:id" element={<FruitDetail/>}></Route>
        <Route path="/veg" element={<Vegitable/>}></Route>
        <Route path="/veg/:id" element={<VegitableDetail/>}></Route>
        <Route path="/cartpage" element={<CartPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/thankyou' element={<Thankyou/>}></Route>

        {/* <Route path="/login" element={<Login/>}></Route> */}

      </Routes>
      <Footer/>
     
    </div>
  )
}

export default App
