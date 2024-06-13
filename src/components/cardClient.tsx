import { format } from "date-fns";

import "./carClient.scss";
import { ClientProps } from "../pages/home";
import { MdOpenInNew } from "react-icons/md";

import CustomModal from "./modal";
import { useState } from "react";
import DateNotified from "../actions/notified";

interface CardClientProps {
  client: ClientProps;
}

const CardClient = ({ client }: CardClientProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const notified = DateNotified({
    dates: client.dates,
    lastCutie: client.lastCutie,
  });

  return (
    <div className="card-client">
      <div className="content">
        <div className="content-info">
          <h1>{client.name}</h1>
          <span>{client.phoneNumber}</span>
          <span>{client.email}</span>
        </div>
        <button onClick={() => setModalOpen(true)}>
          <MdOpenInNew size={18} />
        </button>
      </div>
      <div>
        <h3>Próxima notificação</h3>
        <h4>
          {notified ? format(notified, "dd/MM/yyy") : "Nenhuma data calculada!"}
        </h4>
      </div>
      <CustomModal
        client={client}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default CardClient;
