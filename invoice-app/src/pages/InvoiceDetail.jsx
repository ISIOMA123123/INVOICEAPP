import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import StatusBadge from "../components/StatusBadge";

function InvoiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { invoices, setInvoices } = useContext(InvoiceContext);

  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) {
    return <p>Invoice not found</p>;
  }

  function handleDelete() {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      const updated = invoices.filter((inv) => inv.id !== id);
      setInvoices(updated);
      navigate("/");
    }
  }

  function handleMarkPaid() {
    const updated = invoices.map((inv) =>
      inv.id === id ? { ...inv, status: "Paid" } : inv
    );
    setInvoices(updated);
  }

  return (
    <div>
      <h2>Invoice #{invoice.id}</h2>

      <StatusBadge status={invoice.status} />

      <p><strong>Client:</strong> {invoice.clientName}</p>
      <p><strong>Date:</strong> {invoice.date}</p>
      <p><strong>Amount:</strong> £{invoice.amount}</p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate(`/edit/${invoice.id}`)}>
             Edit
        </button>

        <button onClick={handleDelete}>Delete</button>

        {invoice.status !== "Paid" && (
          <button onClick={handleMarkPaid}>
            Mark as Paid
          </button>
        )}
      </div>
    </div>
  );
}



export default InvoiceDetail;

