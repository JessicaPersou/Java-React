import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListClient } from "./components/ListClient";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FormClient } from "./components/FormClient";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/client">
          <ListClient />
        </Route>
        <Route exact path="/client/:id">
          <FormClient />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
