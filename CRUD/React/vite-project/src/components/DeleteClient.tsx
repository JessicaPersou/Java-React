import { useEffect, useState } from "react"
import axios from "axios"


export function DeleteId() {

    const[status, setStatus] = useState(document.getElementById("delId"));

    useEffect(() => {
      axios.delete("http://localhost:8080/client/id")
        .then(() => setStatus(null));
        
    }, [])
  }

