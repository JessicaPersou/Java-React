import { useEffect, useState } from "react";
import { IClient } from "../models/client";
import axios from "axios";
import { useHistory } from "react-router-dom";

export function FormClient() {
  const [client, setClient] = useState<IClient>();
  let history = useHistory();

  function onChange(name: string, value: any) {
    setClient({ ...client, [name]: value });
  }

  async function onSave() {
    try {
      await axios.post(`http://localhost:8080/client`, client);
      history.push("/client");
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    console.log(client);
  }, [client]);

  return (
    <div className="container">
      <input
        onChange={(e) => onChange("fullName", e.target.value)}
        type="text"
        className="form-control"
        placeholder="Nome Completo"
      />
      <input
        onChange={(e) => onChange("cpf", e.target.value)}
        type="text"
        className="form-control"
        placeholder="CPF"
      />
      <input
        onChange={(e) => onChange("date", e.target.value)}
        type="date"
        className="form-control"
        placeholder="Data Nascimento"
      />
      <button className="btn btn-success" onClick={() => onSave()}>
        Salvar
      </button>
    </div>
  );
}
