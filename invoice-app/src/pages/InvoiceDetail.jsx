import { useParams } from "react-router-dom";
import invoices from "../data/invoices";

function InvoiceDetail() {
  const { id } = useParams();

  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) {
    return <p>Invoice not found</p>;
  }

  return (
    <div>
      <h2>Invoice #{invoice.id}</h2>

      <p><strong>Client:</strong> {invoice.clientName}</p>
      <p><strong>Date:</strong> {invoice.date}</p>
      <p><strong>Amount:</strong> £{invoice.amount}</p>
      <p><strong>Status:</strong> {invoice.status}</p>
    </div>
  );
}

export default InvoiceDetail;

