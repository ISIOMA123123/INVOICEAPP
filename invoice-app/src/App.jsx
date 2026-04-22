import { Routes, Route } from "react-router-dom";
import InvoiceList from "./pages/InvoiceList";
import InvoiceDetail from "./pages/InvoiceDetail";
import NewInvoice from "./pages/NewInvoice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InvoiceList />} />
      <Route path="/invoice/:id" element={<InvoiceDetail />} />
      <Route path="/new" element={<NewInvoice />} />
    </Routes>
  );
}

export default App;


