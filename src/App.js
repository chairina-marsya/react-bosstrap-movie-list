import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/** pages */
import SongsPlaylist from './container';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SongsPlaylist} />
      </Switch>
    </Router>
  );
}

export default App;
