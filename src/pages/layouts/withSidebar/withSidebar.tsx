import React from 'react';
import Styles from './withSidebar.module.scss';

export default (
  Page: React.FC,
  Sidebar: React.ComponentType
) => (
  () => (
    <div className={Styles.container}>
      <Page />
      <div className={Styles.container__sidebar}>
        <Sidebar />
      </div>
    </div> 
  )
);
