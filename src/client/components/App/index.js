import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import Info from '../Info';

import style from './../../assets/style/default.less';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Info" component={Info}/>
    </Switch>
  </div>
);

export default App;
