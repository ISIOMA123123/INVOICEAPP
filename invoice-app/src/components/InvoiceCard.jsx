import StatusBadge from "./StatusBadge";

function InvoiceCard({ invoice }) {
  return (
    <div className="card">
      <div>
        <h3>#{invoice.id}</h3>
        <p>{invoice.clientName}</p>
      </div>

      <div>
        <p>{invoice.date}</p>
      </div>

      <div>
        <strong>£ {invoice.amount}</strong>
      </div>

      <StatusBadge status={invoice.status} />
    </div>
  );
}

export default InvoiceCard;