import { useState, useContext } from "react";
import { useParams, useNavigate} from "react-router-dom";
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

  const [showModal, setShowModal] = useState(false);

  return (


    



    
    <div>

      <button onClick={() => navigate(-1)}>
         ← Go Back
      </button>

      <h2>Invoice #{invoice.id}</h2>

      <StatusBadge status={invoice.status} />

      <p><strong>Client:</strong> {invoice.clientName}</p>
      <p><strong>Date:</strong> {invoice.date}</p>
      <p><strong>Amount:</strong> £{invoice.amount}</p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate(`/edit/${invoice.id}`)}>
             Edit
        </button>

        <button onClick={() => setShowModal(true)}>
            Delete
        </button>

        {invoice.status !== "Paid" && (
          <button onClick={handleMarkPaid}>
            Mark as Paid
          </button>
        )}
      </div>

      {showModal && (
  <div className="modal">
    <div className="modal-content">
      <p>Are you sure you want to delete this invoice?</p>

      <button onClick={() => setShowModal(false)}>
        Cancel
      </button>

      <button
        onClick={() => {
          const updated = invoices.filter(
            (inv) => String(inv.id) !== String(id)
          );
          setInvoices(updated);
          navigate("/");
        }}
      >
        Confirm Delete
      </button>
    </div>
  </div>
)}


    </div>
  );
}



export default InvoiceDetail;

