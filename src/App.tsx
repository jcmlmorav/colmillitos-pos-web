import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Billing from './pages/billing/Billing';
import Sales from './pages/sales/Sales';
import Cash from './pages/cash/Cash';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Redirect from="/" exact to="/facturacion" />
      <Route path="/facturacion" exact component={Billing} />
      <Route path="/ventas" exact component={Sales} />
      <Route path="/caja" exact component={Cash} />
      <Route component={() => <h1>404 Not found</h1>} />
    </Switch>
  </Router>
);

export default App;
