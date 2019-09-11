import React from 'react';
import { Wrapper, SidebarWrapper } from './styles';

export default (
  Page: React.FC,
  Sidebar: React.ComponentType
) => (
  () => (
    <Wrapper>
      <Page />
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
    </Wrapper>
  )
);
