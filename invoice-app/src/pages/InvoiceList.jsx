

import { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import InvoiceCard from "../components/InvoiceCard";


function InvoiceList() {
  const { invoices } = useContext(InvoiceContext);

  return (
    <div>
      <h2>Invoices</h2>

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

