import React from 'react';
import Styles from './sales.module.scss';
import { Button } from 'antd';
import Receipt from './components/Receipt';
import withSidebar from '../layouts/withSidebar/withSidebar';
import withMenu from '../layouts/withMenu/withMenu';

const Sales: React.ElementType = () => (
  <div className={Styles.sales}>
    <Button className={Styles.sales__printButton} type="primary" icon="printer" size="large">
      Imprimir
    </Button>
    <div className={Styles.sales__receipt}>
      <Receipt />
    </div>
  </div>
);

export default withMenu(withSidebar(Sales, (() => <h1>Future Sidebar</h1>)));
