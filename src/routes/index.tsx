import { Switch } from "react-router-dom";
import Route from "./route";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/dashboard" isPrivate>
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
