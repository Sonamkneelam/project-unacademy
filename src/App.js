/** @format */

import "./App.css";
import BeforeHomePage from "./pages/BeforeHomePage";
import { Route, Switch } from "react-router-dom";
import { ExplorePage } from "./pages/ExplorePage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <BeforeHomePage />
        </Route>
        <Route exact path='/explore'>
          <ExplorePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
