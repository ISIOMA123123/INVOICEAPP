import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";


function InvoiceCard({ invoice }) {
  const navigate = useNavigate();



 

  return (
    <div
      className="card"
      onClick={() => navigate(`/invoice/${invoice.id}`)}
    >



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
