import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './ProductDetail.jsx'
import Cart from './components/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
   <Route path="/" element={<App />} />
   <Route path="/cart" element={<Cart />} />
   <Route path="/:id" element={<ProductDetail />} />
 
  </Routes>
  </BrowserRouter>
)
