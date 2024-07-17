import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home/Home'
// import Navbar from './components/Navbar/Navbar'
import ClickForm from './components/clickForm/ClickForm'


const App = () => {
  return (

    <div className='App'>
      <ClickForm/>
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  )
}

export default App