
import { useState } from "react";
import { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import InvoiceCard from "../components/InvoiceCard";

import { useNavigate } from "react-router-dom";

function InvoiceList() {
  const navigate = useNavigate();
  const { invoices } = useContext(InvoiceContext);
  const [filter, setFilter] = useState("All");

  // ✅ DEFINE HERE (BEFORE return)
  const filteredInvoices =
    filter === "All"
      ? invoices
      : invoices.filter((inv) => inv.status === filter);

  return (
    <div>
      <h2>Invoices</h2>

      <div>
        <button onClick={() => navigate("/new")}>
          + New Invoice
        </button>
        <button onClick={()=> setFilter("All")}>All</button>
        <button onClick={() => setFilter("Draft")}>Draft</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
        <button onClick={() => setFilter("Paid")}>Paid</button>
      </div>

      {filteredInvoices.length === 0 ? (
        <p>No invoices found</p>
      ) : (
        filteredInvoices.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))
      )}
    </div>
  );
}
export default InvoiceList;

