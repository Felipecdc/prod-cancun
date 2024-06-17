import { useCallback, useEffect, useRef, useState } from "react";
import Input from "../../components/input";
import "./home.scss";
import axios from "axios";
import CardClient from "../../components/cardClient";
import { toast } from "react-toastify";

export interface ClientProps {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  dates: Date[];
  lastCutie: Date;
}

const Home = () => {
  const searchClientRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const [allClients, setALlClients] = useState<ClientProps[] | []>([]);
  const [filteredClients, setFilteredClients] = useState<ClientProps[]>([]);

  const fetchClients = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api-cancun-lcaz.vercel.app/client"
      );
      console.log(response.data);
      setALlClients(response.data);
      setFilteredClients(response.data);
    } catch (error) {
      console.log("Error fetching clients:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  const handleSendMessages = async () => {
    try {
      const response = await axios.post(
        "https://api-cancun-lcaz.vercel.app/api"
      );
      console.log(response.data);
      toast.success("Mensagens enviadas!");
      fetchClients();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = () => {
    const searchText = searchClientRef.current?.value.toLowerCase();
    if (!searchText) {
      return setFilteredClients(allClients);
    }

    const filtered = allClients.filter((client) =>
      client.name.toLowerCase().includes(searchText)
    );

    if (filtered.length === 0) {
      return toast.warn("Cliente não encontrado!");
    }

    setFilteredClients(filtered);
  };

  const HandleSearchClientByName = () => {
    handleInputChange();
  };

  const handleNewClient = () => {
    window.location.href = "/client";
  };

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="box">
        <Input
          placeholder="Nome do cliente"
          type="text"
          icon="search"
          inputRef={searchClientRef}
          onChange={handleInputChange}
          onClick={HandleSearchClientByName}
        />
      </div>
      <div className="box-actions">
        <div className="actions">
          <button className="send" onClick={handleSendMessages}>
            Enviar
          </button>
          <button className="new" onClick={handleNewClient}>
            Novo
          </button>
        </div>
      </div>
      <div className="content-client">
        <div className="card-client-space">
          {filteredClients.map((client) => (
            <CardClient key={client._id} client={client} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
