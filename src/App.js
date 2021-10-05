/** @format */

import "./App.css";
import React from "react";
import BeforeHomePage from "./pages/BeforeHomePage";
import { Route, Switch } from "react-router-dom";
import { ExplorePage } from "./pages/ExplorePage";
import { Goal } from "./pages/GoalPage";
import { CrackPage } from "./pages/CrackProblemPage";
import { LivePage } from "./pages/LivePage";
import WatchPage from "./pages/Watchpage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Configs/firebase";
//import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const env = process.env.NODE_ENV;
  const dev = process.env.REACT_APP_DEV;
  const sec = process.env.REACT_APP_SECRECT;
  console.log(env, dev, sec)

  const [user] = useAuthState(auth);
  // console.log("user:", user);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <BeforeHomePage />
        </Route>
        <Route path="/explore">
          <ExplorePage />
        </Route>
        <Route path="/goal/:page/:cat/:id">
          <Goal />
        </Route>
        <Route path="/crack/:cat/:id" exact>
          <CrackPage />
        </Route>
        <Route path="/crack/" exact>
          <CrackPage />
        </Route>
        <Route path="/watch">
          <WatchPage />
        </Route>
        <Route path="/live">
          <LivePage />
        </Route>
        {/* <Route path="/sub">
          <Navbar></Navbar>
        </Route> */}

        <Route>404</Route>
      </Switch>
    </div>
  );
}

export default App;
