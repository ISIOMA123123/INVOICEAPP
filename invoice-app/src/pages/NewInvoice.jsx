import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { InvoiceContext } from "../context/InvoiceContext";

function NewInvoice() {
  //  CONTEXT FIRST
  const { invoices, setInvoices } = useContext(InvoiceContext);

  // PARAMS
  const { id } = useParams();
  const navigate = useNavigate();

  // FIND EXISTING INVOICE
  const existingInvoice = invoices.find((inv) => inv.id === id);

  //  STATE (AFTER everything above)
  const [form, setForm] = useState(
    existingInvoice || {
      clientName: "",
      amount: "",
      date: "",
      status: "Pending",
    }
  );

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.clientName || !form.amount || !form.date) {
      alert("Please fill all fields");
      return;
    }

    if (existingInvoice) {
      // UPDATE
      const updated = invoices.map((inv) =>
        inv.id === id ? { ...inv, ...form } : inv
      );
      setInvoices(updated);
    } else {
      // CREATE
      const newInvoice = {
        id: "XM" + Math.floor(Math.random() * 10000),
        ...form,
        amount: Number(form.amount),
      };
      setInvoices([...invoices, newInvoice]);
    }

    navigate("/");
  }

  return (
    <div>
      <h2>{existingInvoice ? "Edit Invoice" : "New Invoice"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="clientName"
          value={form.clientName}
          onChange={handleChange}
          placeholder="Client Name"
        />

        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option>Pending</option>
          <option>Draft</option>
          <option>Paid</option>
        </select>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NewInvoice;
