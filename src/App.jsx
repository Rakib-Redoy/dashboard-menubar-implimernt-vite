import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import PriceList from './components/PriceList/Pricelist'
import DashBoard from './components/DashBoard/DashBoard'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceList></PriceList>
      <DashBoard></DashBoard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
