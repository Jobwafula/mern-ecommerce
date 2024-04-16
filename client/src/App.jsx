import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddProductPage from './pages/AddProductPage'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addProduct" element={<AddProductPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
