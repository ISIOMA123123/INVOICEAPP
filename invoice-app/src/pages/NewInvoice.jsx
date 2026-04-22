import { useState, useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import { useNavigate } from "react-router-dom";

function NewInvoice() {
  const { invoices, setInvoices } = useContext(InvoiceContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    clientName: "",
    amount: "",
    date: "",
    status: "Pending",
  });

  // HANDLE INPUT CHANGE
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // HANDLE SUBMIT
  function handleSubmit(e) {
    e.preventDefault();

    // simple validation
    if (!form.clientName || !form.amount || !form.date) {
      alert("Please fill all fields");
      return;
    }

    const newInvoice = {
      id: "XM" + Math.floor(Math.random() * 10000),
      ...form,
      amount: Number(form.amount),
    };

    setInvoices([...invoices, newInvoice]);

    navigate("/");
  }

  return (
    <div>
      <h2>New Invoice</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
        />

        <select name="status" onChange={handleChange}>
          <option>Pending</option>
          <option>Draft</option>
        </select>

        <button type="submit">Save Invoice</button>
      </form>
    </div>
  );
}

export default NewInvoice;

