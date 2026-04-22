import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import InvoiceList from "./pages/InvoiceList";
import InvoiceDetail from "./pages/InvoiceDetail";
import NewInvoice from "./pages/NewInvoice";


<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
  Toggle Theme
</button>


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
    <Routes>
      <Route path="/" element={<InvoiceList />} />
      <Route path="/invoice/:id" element={<InvoiceDetail />} />
      <Route path="/edit/:id" element={<NewInvoice />} />
      <Route path="/new" element={<NewInvoice />} />
    </Routes>
  );
}

export default App;


