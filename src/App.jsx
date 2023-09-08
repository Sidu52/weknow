import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin, Signup } from './pages/form/index';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
