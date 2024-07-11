// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import Switch explicitly
import Adminpage from './pages/Adminpage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/login" component={Adminpage} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
