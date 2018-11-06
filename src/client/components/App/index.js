import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import Info from '../Info';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/Info" component={Info}/>
      <Route path="/Home" component={Home}/>
    </Switch>
  </div>
);

export default App;
