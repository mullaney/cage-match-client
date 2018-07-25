import React from 'react';
import {Route} from 'react-router';
import {Cagematches, Navbar, Cagematch} from './components';

const App = props => (
  <div>
    <Navbar />
    <Route exact path="/" component={Cagematches} />
    <Route path="/:slug" component={Cagematch} />
  </div>
);

export default App;
