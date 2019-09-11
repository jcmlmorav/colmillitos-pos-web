import React from 'react';
import { Wrapper, MenuWrapper, PageWrapper, User, UserProperties } from './styles';
import { Menu, Icon, Avatar } from 'antd';
import { Link } from "react-router-dom";

export default (Page: React.FC) => (
  ({ match: { path } }: {
    match: any;
    path: string;
  }) => (
    <Wrapper>
      <MenuWrapper>
        <User>
          <Avatar size={50} icon="user" />
          <UserProperties>
            <span>User</span>
            <Link to="/">Cerrar sesión</Link>
          </UserProperties>
        </User>
        <Menu
          defaultSelectedKeys={[ path ]}
          mode="inline"
          style={{ borderRight: 0 }}
        >
          <Menu.Item key="/facturacion">
            <Link to="/facturacion"><Icon type="calculator" />Facturación</Link>
          </Menu.Item>
          <Menu.Item key="/ventas">  
            <Link to="/ventas"><Icon type="shopping" />Ventas</Link>
          </Menu.Item>
          <Menu.Item key="/caja">
            <Link to="/caja"><Icon type="dollar" />Caja</Link>
          </Menu.Item>
          <Menu.Item key="/inventario">
            <Link to="/inventario"><Icon type="database" />Inventario</Link>
          </Menu.Item>
          <Menu.Item key="/finanzas">
            <Link to="/finanzas"><Icon type="line-chart" />Finanzas</Link>
          </Menu.Item>
        </Menu> 
      </MenuWrapper>
      <PageWrapper>
        <Page />
      </PageWrapper>
    </Wrapper>
  )
);
