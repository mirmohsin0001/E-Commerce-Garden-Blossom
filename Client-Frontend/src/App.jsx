import { Routes, Route } from 'react-router'
import './App.css'

import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import MyAccount from './components/MyAccount/MyAccount.jsx'
import Home from './components/Home/Home.jsx'
import Cart from './components/Cart/Cart.jsx'
import Login from './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/About" element={<><About /></>} />
        <Route path="/MyAccount" element={<><MyAccount /></>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>

    </>
  )
}

export default App
