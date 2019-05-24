import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import 'antd/dist/antd.css';
import Billing from './pages/Billing';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Billing} />
        <Route path="/billing" component={() => <h1>Billing</h1>} />
        <Route component={() => <h1>404 Not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
