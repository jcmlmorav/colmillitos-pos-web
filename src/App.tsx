import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import Billing from './pages/billing/Billing';
import Sales from './pages/sales/Sales';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Redirect from="/" exact to="/facturacion" />
        <Route path="/facturacion" exact component={Billing} />
        <Route path="/ventas" exact component={Sales} />
        <Route component={() => <h1>404 Not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
