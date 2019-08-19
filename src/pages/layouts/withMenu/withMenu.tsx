import React from 'react';
import Styles from './withMenu.module.scss';
import { Menu, Icon, Avatar } from 'antd';
import { Link } from "react-router-dom";

export default (Page: React.FC) => (
  ({ match : { path } }: {
    match: any;
    path: string;
  }) => (
    <div className={Styles.container}>
      <div className={Styles.menu}>
        <div className={Styles.user}>
          <Avatar size={50} icon="user" />
          <div className={Styles.user__properties}>
            <span>User</span>
            <Link to="/">Cerrar sesión</Link>
          </div>
        </div>
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
        </Menu> 
      </div>
      <div className={Styles.page}>
        <Page />
      </div>
    </div>
  )
);
