import React from 'react';
import Styles from './withSidebar.module.scss';

export default (Page: React.FC) => (
  () => (
    <div className={Styles.innerContainer}>
      <Page />
      <div className={Styles.sidebar}>
        <h2 className={Styles.title}>With Sidebar</h2>
      </div>
    </div> 
  )
);
