import React from 'react';
import withMenu from './layouts/withMenu/withMenu';
import withSidebar from './layouts/withSidebar/withSidebar';
import { Props } from '../types/billing';

const Billing: React.FC<Props> = (props) => {
  return (
    <div {...props}>
      <h1>Billing...</h1>
    </div>
  );
};

export default withMenu(withSidebar(Billing));
