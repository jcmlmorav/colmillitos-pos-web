import React from 'react';
import Styles from './withSidebar.module.scss';

export default (
  Page: React.FC,
  Content: React.FC
) => (
  () => (
    <div className={Styles.innerContainer}>
      <Page />
      <div className={Styles.sidebar}>
        <Content />
      </div>
    </div> 
  )
);
