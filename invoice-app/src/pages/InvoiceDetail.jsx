import { useParams, useNavigate } from "react-router-dom";
import invoices from "../data/invoices";
import StatusBadge from "../components/StatusBadge";

function InvoiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) {
    return <p>Invoice not found</p>;
  }

  return (
    <div>
      <h2>Invoice #{invoice.id}</h2>

      <StatusBadge status={invoice.status} />

      <p><strong>Client:</strong> {invoice.clientName}</p>
      <p><strong>Date:</strong> {invoice.date}</p>
      <p><strong>Amount:</strong> £{invoice.amount}</p>

      {/* ACTION BUTTONS */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => console.log("Edit clicked")}>
          Edit
        </button>

        <button onClick={() => handleDelete()}>
          Delete
        </button>

        {invoice.status !== "Paid" && (
          <button onClick={() => handleMarkPaid()}>
            Mark as Paid
          </button>
        )}
      </div>
    </div>
  );

  // DELETE FUNCTION
  function handleDelete() {
    const confirmDelete = window.confirm("Are you sure?");

    if (confirmDelete) {
      alert("Invoice deleted");
      navigate("/");
    }
  }

  // MARK AS PAID
  function handleMarkPaid() {
    invoice.status = "Paid";
    alert("Marked as Paid");
  }
}


export default InvoiceDetail;

