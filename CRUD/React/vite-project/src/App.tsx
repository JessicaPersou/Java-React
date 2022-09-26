import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListClient } from "./components/ListClient";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormClient } from "./components/FormClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/client/:id" element={<FormClient />} />
        <Route path="/client" element={<ListClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
