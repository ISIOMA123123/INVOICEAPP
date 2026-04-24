import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";


import InvoiceList from "./pages/InvoiceList";
import InvoiceDetail from "./pages/InvoiceDetail";
import NewInvoice from "./pages/NewInvoice";




function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }
}, []);


useEffect(() => {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}, [theme]);


return (
  <div className="container">

    {/*  THEME BUTTON */}
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
      style={{ marginBottom: "20px" }}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>

    {/*  ROUTES  */}

    
    <Routes>
        <Route path="/" element={<InvoiceList />} />
        <Route path="/invoice/:id" element={<InvoiceDetail />} />
        <Route path="/edit/:id" element={<NewInvoice />} />
        <Route path="/new" element={<NewInvoice />} />
      </Routes>
    

  </div>
);
}

export default App;


