import { useRef } from "react";
import Input from "../../components/input";
import "./client.scss";
import axios from "axios";
import { toast } from "react-toastify";

const Client = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const phoneNumber = phoneRef.current?.value;

    if (!name || !email || !phoneNumber) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api-cancun-lcaz.vercel.app/client",
        { name, email, phoneNumber }
      );
      if (response) {
        toast.success("Cliente cadastrado com sucesso!");
      } else {
        toast.error("Erro ao cadastrar cliente.");
      }
    } catch (error) {
      toast.error("Erro ao cadastrar cliente.");
      console.error(error);
    } finally {
      if (nameRef.current && emailRef.current && phoneRef.current) {
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
      }
    }
  };

  return (
    <div className="box">
      <h1>Criar novo cliente</h1>
      <form onSubmit={handleSubmit} className="form">
        <Input
          inputRef={nameRef}
          onChange={() => {}}
          onClick={() => {}}
          placeholder="Nome"
          type="text"
        />
        <Input
          inputRef={emailRef}
          onChange={() => {}}
          onClick={() => {}}
          placeholder="Email"
          type="email"
        />
        <Input
          inputRef={phoneRef}
          onChange={() => {}}
          onClick={() => {}}
          placeholder="Numero"
          type="tel"
        />
        <button type="submit" className="button">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Client;
