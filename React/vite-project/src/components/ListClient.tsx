import axios from "axios"
import moment from "moment"
import { useEffect, useState } from "react"
import { IClient } from '../models/client'
import { DeleteId } from "./DeleteClient"


export function ListClient() {

  const [list, setList] = useState<IClient[]>([])

  useEffect(() => {

    axios("http://localhost:8080/client").then((response) => {

      setList(response.data)

    })

  }, [])



  return (
    <table>
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
        {
          list.map(item =>

            <tr key={item.id}>
              <td>{item.fullName}</td>
              <td>{item.cpf}</td>
              <td>{item.date && moment(item.date).format("DD/MM/YYYY")}</td>
              <td id="delId">{item.id}</td>
              <td><button onClick={() => {DeleteId}}>Apagar</button></td>
            </tr>

          )
        }

      </tbody>
    </table>
  )

}