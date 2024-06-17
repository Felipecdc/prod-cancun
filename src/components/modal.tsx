import Modal from "react-modal";
import "./modal.scss";
import { ClientProps } from "../pages/home";
import DateNotified from "../actions/notified";
import { format } from "date-fns";
import Input from "./input";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: ClientProps;
}

const CustomModal = ({ client, isOpen, onClose }: ModalProps) => {
  const keyRef = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    if (inputError) {
      const timer = setTimeout(() => {
        setInputError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [inputError]);

  const handleInputChange = async () => {
    const key = keyRef.current?.value;
    if (!key) {
      return setInputError(true);
    }

    try {
      const keyRequest = await axios.patch(
        `https://api-cancun-lcaz.vercel.app/client/${client._id}`,
        { key: key },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(keyRequest.data);
      onClose();
      toast.success("Serviço agendado para hoje!");
    } catch (error) {
      setInputError(true);
      console.log(error);
    } finally {
      if (keyRef.current) {
        keyRef.current.value = "";
      }
    }
  };

  const handleUpdateClient = async () => {
    await handleInputChange();
  };

  const notified = DateNotified({
    dates: client.dates,
    lastCutie: client.lastCutie,
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-container"
      overlayClassName="modal-overlay"
    >
      <h1>Confirmar serviço</h1>
      <div className="content-info content-space">
        <span>
          <strong>Nome: </strong>
          {client.name}
        </span>
        <span>
          <strong>Numero: </strong>
          {client.phoneNumber}
        </span>
        <span>
          <strong>Email: </strong>
          {client.email}
        </span>
      </div>
      <div className="content-date">
        <h3>Próxima notificação</h3>
        <h4>
          {notified ? format(notified, "dd/MM/yyy") : "Nenhuma data calculada!"}
        </h4>
      </div>
      <div
        className={inputError ? "input-request input-error" : "input-request"}
      >
        <h3>Digite sua chave</h3>
        <Input
          icon="send"
          inputRef={keyRef}
          onChange={handleInputChange}
          onClick={handleUpdateClient}
          placeholder="Digite sua chave"
          type="number"
        />
      </div>
    </Modal>
  );
};

export default CustomModal;
