

import { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import InvoiceCard from "../components/InvoiceCard";

import { useNavigate } from "react-router-dom";

function InvoiceList() {
  const navigate = useNavigate();
  const { invoices } = useContext(InvoiceContext);

  return (
    <div>
      <h2>Invoices</h2>

      <button onClick={() => navigate("/new")}>
        + New Invoice
      </button>

      {invoices.length === 0 ? (
        <p>No invoices yet</p>
      ) : (
        invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))
      )}
    </div>
  );
}



export default InvoiceList;

