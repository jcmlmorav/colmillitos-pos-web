import React from 'react';
import Styles from './withMenu.module.scss';
import { Props } from '../../../types/billing';

export default (Page: React.FC<Props>) => (
  () => (
    <div className={Styles.container}>
      <div className={Styles.menu}>
        <h2 className={Styles.title}>With Menu</h2>
        <ul>
          <li>Facturacion</li>
          <li>Ventas</li>
        </ul>
      </div>
      <Page className={Styles.page} />
    </div>
  )
);