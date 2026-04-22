import invoices from "../data/invoices";
import InvoiceCard from "../components/InvoiceCard";

function InvoiceList() {
  return (
    <div>
      <h2>Invoices</h2>

      {invoices.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
}

export default InvoiceList;

