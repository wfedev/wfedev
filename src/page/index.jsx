import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Main from './main';
import Nav from '../nav/nav';
import Resume from '../nav/resume';

export default function index() {
    return (
        <>
        <BrowserRouter>
          <Route
            render={({ location }) => (
              <>
                  <Switch location={location}>
                    <Route exact path="/"  render={() => <Redirect to="/Main" />} />
                    <Route path="/Main" component={Main} />
                    <Route path="/Nav" component={Nav} />
                    <Route path="/Resume" component={Resume} />
                  </Switch>
              </>
            )}
          />
        </BrowserRouter>
      </>
    );
}