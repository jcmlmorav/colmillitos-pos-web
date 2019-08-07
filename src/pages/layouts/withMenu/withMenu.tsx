import React from 'react';
import { Link } from "react-router-dom";
import Styles from './withMenu.module.scss';
import { Menu, Icon, Avatar } from 'antd';

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
          <Menu.Item key="cash">
            <Link to="/"><Icon type="appstore" />Caja</Link>
          </Menu.Item>
          <Menu.Item key="inventory">
            <Link to="/"><Icon type="appstore" />Inventario</Link>
          </Menu.Item>
        </Menu> 
      </div>
      <div className={Styles.page}>
        <Page />
      </div>
    </div>
  )
);
