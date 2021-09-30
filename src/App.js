/** @format */

import "./App.css";
import BeforeHomePage from "./pages/BeforeHomePage";
import { Route, Switch } from "react-router-dom";
import { ExplorePage } from "./pages/ExplorePage";
import { Goal } from "./pages/GoalPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <BeforeHomePage />
        </Route>
        <Route path='/explore'>
          <ExplorePage />
        </Route>
        <Route path='/goal/:name'>
          <Goal />
        </Route>
        <Route>404</Route>
      </Switch>
      
    </div>
  );
}

export default App;
