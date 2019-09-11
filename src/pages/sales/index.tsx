import React from 'react';
import { Wrapper, PrintButton, ReceiptWrapper } from './styles';
import { Button } from 'antd';
import Receipt from './components/receipt';
import withMenu from '../layouts/withMenu';
import withSidebar from '../layouts/withSidebar';
import Sidebar from './components/Sidebar';

const Sales: React.ElementType = () => (
  <Wrapper>
    <PrintButton>
      <Button type="primary" icon="printer" size="large">
        Imprimir
      </Button>
    </PrintButton>
    <ReceiptWrapper>
      <Receipt />
    </ReceiptWrapper>
  </Wrapper>
);

export default withMenu(withSidebar(Sales, Sidebar));
