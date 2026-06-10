import React from 'react'
import Headers from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainRoutes from './components/MainRoutes'


function App() {
  return (
    <div>
      <Headers />
      <Navbar />
      <hr /> 
      <MainRoutes />
      <h1>Hello</h1>
      <hr />
      <Footer />
    </div>
  )
}

export default App
