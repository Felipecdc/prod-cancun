import { format } from "date-fns";

import "./carClient.scss";
import { ClientProps } from "../pages/home";
import { MdOpenInNew } from "react-icons/md";

interface CardClientProps {
  client: ClientProps;
}

const CardClient = ({ client }: CardClientProps) => {
  let nextNotified;
  const dates = client.dates;
  const lastCutie = new Date(client.lastCutie);
  if (dates.length >= 3) {
    let dateDiffs = [];
    for (let i = 1; i < dates.length; i++) {
      const diffTime = Math.abs(
        new Date(dates[i]).getTime() - new Date(dates[i - 1]).getTime()
      );
      dateDiffs.push(diffTime);
    }
    const minDateDiff = Math.min(...dateDiffs);
    nextNotified = new Date(lastCutie.getTime() + minDateDiff);
  }

  return (
    <div className="card-client">
      <div className="content">
        <div className="content-info">
          <h1>{client.name}</h1>
          <span>{client.phoneNumber}</span>
          <span>{client.email}</span>
        </div>
        <button>
          <MdOpenInNew size={18} />
        </button>
      </div>
      <div>
        <h3>Próxima notificação</h3>
        <h4>
          {nextNotified
            ? format(nextNotified, "dd/MM/yyy")
            : "Nenhuma data calculada!"}
        </h4>
      </div>
    </div>
  );
};

export default CardClient;
