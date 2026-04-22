import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Routes, Route } from "react-router-dom";
import InvoiceList from "./pages/InvoiceList";
import InvoiceDetail from "./pages/InvoiceDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InvoiceList />} />
      <Route path="/invoice/:id" element={<InvoiceDetail />} />
    </Routes>
  );
}

export default App;
