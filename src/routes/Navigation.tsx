import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../logo.svg";
import { routs } from "../01-lazyload/router/routs";

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routs.map((rout, index) => (
                <li key={rout.to}>
                  <NavLink to={rout.to} activeClassName="nav-active" exact>
                    {rout.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Switch>
            {routs.map((rout, index) => (
              <Route
                key={rout.to}
                path={rout.path}
                exact={rout.exact}
                component={rout.Component}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
