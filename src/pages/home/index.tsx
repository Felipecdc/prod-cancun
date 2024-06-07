import { useEffect, useRef, useState } from "react";
import Input from "../../components/input";
import "./home.scss";
import axios from "axios";

interface ClientProps {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  date: Date[];
  lastCutie: Date;
}

const Home = () => {
  const searchClientRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const [allClients, setALlClients] = useState<ClientProps[] | []>([]);
  const [filteredClients, setFilteredClients] = useState<ClientProps[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
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
    };

    fetchClients();
  }, []);

  const handleInputChange = () => {
    const searchText = searchClientRef.current?.value.toLowerCase();
    if (!searchText) {
      return setFilteredClients(allClients);
    }

    const filtered = allClients.filter((client) =>
      client.name.toLowerCase().includes(searchText)
    );
    setFilteredClients(filtered);
  };

  const HandleSearchClientByName = () => {
    handleInputChange();
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
          inputRef={searchClientRef}
          onChange={handleInputChange}
          onClick={HandleSearchClientByName}
        />
      </div>
      <div className="box">
        {filteredClients.map((client) => (
          <h1 key={client._id}>{client.name}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
