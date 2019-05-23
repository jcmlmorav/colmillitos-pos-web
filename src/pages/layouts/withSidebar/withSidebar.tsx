import React from 'react';
import Styles from './withSidebar.module.scss';
import { Props } from '../../../types/billing';

export default (Page: React.FC<Props>) => (
  () => (
    <div className={Styles.innerContainer}>
      <Page className={Styles.page} />
      <div className={Styles.sidebar}>
        <h2 className={Styles.title}>With Sidebar</h2>
      </div>
    </div> 
  )
);
