import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { CreateSessionPage, ViewSessionPage } from "./pages";

export default function Layout() {
  return (
    <div className="main-layout">
      <div className="title">
        <h2>Scrum Poker</h2>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/create-session">Create Session</Link>
          </li>
          <li>
            <Link to="/view-session">View Session</Link>
          </li>
        </ul>
      </nav>

      <div className="page">
        <Switch>
          <Route path="/create-session" component={CreateSessionPage} />
          <Route path="/view-session" component={ViewSessionPage} />
        </Switch>
      </div>
    </div>
  );
}
