import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { IClient } from "../models/client";

export function ListClient() {
  const [list, setList] = useState<IClient[]>([]);

  useEffect(() => {
    onLoad();
  }, []);

  async function onRemove(id: number) {
    try {
      await axios.delete(`http://localhost:8080/client/${id}`);
      onLoad();
    } catch (e) {
      console.error(e);
    }
  }

  async function onLoad() {
    try {
      const response = await axios("http://localhost:8080/client");
      setList(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Data</th>
            <th>Id</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.fullName}</td>
              <td>{item.cpf}</td>
              <td>{item.date && moment(item.date).format("DD/MM/YYYY")}</td>
              <td id="delId">{item.id}</td>
              <td>
                <button
                  onClick={() => {
                    onRemove(item.id);
                  }}
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
