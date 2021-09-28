
import './App.css';
import BeforeHomePage from './pages/BeforeHomePage';
import {Route,Switch} from "react-router-dom"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <BeforeHomePage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
