import "./client.scss";
import axios from "axios";

const Client = () => {
  const handleSendMessageClick = async () => {
    try {
      const { data } = await axios.post(
        "https://api-cancun-lcaz.vercel.app/api"
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="corpo">
      <h1>Telo client</h1>
      <div className="container">
        <span>Enviar mensagens por este componente</span>
        <button onClick={handleSendMessageClick}>Send message</button>
        <a href="/">Tela home</a>
      </div>
    </div>
  );
};

export default Client;
