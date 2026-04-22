import { createContext, useState, useEffect } from "react";

export const InvoiceContext = createContext();

export function InvoiceProvider({ children }) {
  const [invoices, setInvoices] = useState([]);

  // LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const savedInvoices = JSON.parse(localStorage.getItem("invoices"));
    if (savedInvoices) {
      setInvoices(savedInvoices);
    }
  }, []);

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices }}>
      {children}
    </InvoiceContext.Provider>
  );
}

