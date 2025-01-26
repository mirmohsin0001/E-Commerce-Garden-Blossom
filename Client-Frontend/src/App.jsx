import { Routes, Route } from 'react-router'
import './App.css'

import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import MyAccount from './components/MyAccount/MyAccount.jsx'
import Home from './components/Home/Home.jsx'
import Cart from './components/Cart/Cart.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/About" element={<><About /></>} />
        <Route path="/MyAccount" element={<><MyAccount /></>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>

    </>
  )
}

export default App
