/** @format */

import "./App.css";
import BeforeHomePage from "./pages/BeforeHomePage";
import { Route, Switch } from "react-router-dom";
import { ExplorePage } from "./pages/ExplorePage";
import { Goal } from "./pages/GoalPage";
import { CrackPage } from "./pages/CrackProblemPage";
import WatchPage from "./pages/Watchpage";
import "./App.css";
import { SchoolSyllabus } from "./components/SchoolSyllabus/SchoolSyllabus";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Configs/firebase";
import { AfterOtp } from "./components/Login-SignUp/AfterOtp";

function App() {
  const [user] = useAuthState(auth);
  console.log("user:", user);
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <BeforeHomePage />
        </Route>
        <Route path='/explore'>
          <ExplorePage />
        </Route>
        <Route path='/goal/:page/:cat/:id'>
          <Goal />
        </Route>
        <Route path='/crack'>
          <CrackPage />
        </Route>
        <Route path='/watch'>
          <WatchPage />
        </Route>
        <Route path='/sub'>
          <SchoolSyllabus></SchoolSyllabus>
        </Route>
        <Route path='/success'>
          <AfterOtp></AfterOtp>
        </Route>
        <Route>404</Route>
      </Switch>
    </div>
  );
}

export default App;
