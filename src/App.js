import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Menu from "./components/Menu";
import routes from "./router";

const showRoutes = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Switch>
    );
  }
  return result;
};

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        {showRoutes(routes)}
      </div>
    </Router>
  );
}

export default App;
