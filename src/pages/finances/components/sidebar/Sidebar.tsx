import React from 'react';
import { Wrapper } from './styles';
import { Anchor } from 'antd';

const Sidebar = () => {
  const { Link } = Anchor;
  return (
    <Wrapper>
      <Anchor>
        <Link href="#balance" title="Balance" />
        <Link href="#expenses" title="Egresos" />
        <Link href="#debts" title="Deudas" />
        <Link href="#incomes" title="Ingresos" />
      </Anchor>
    </Wrapper>
  );
};

export default Sidebar;
