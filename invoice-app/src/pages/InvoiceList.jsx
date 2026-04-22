import invoices from "../data/invoices";
import InvoiceCard from "../components/InvoiceCard";

function InvoiceList() {
    return (
        <div>
            <h2>Invoices</h2>

            {invoices.map((invoice) => (
                <div key={invoice.id}>
                    <h3>#{invoice.id}</h3>
                    <p>{invoice.clientName}</p>
                    <p>£ {invoice.amount}</p>
                    <p>{invoice.status}</p>
                </div>
            ))}
        </div>
    );
}

export default InvoiceList;

