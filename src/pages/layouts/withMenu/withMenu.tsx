import React from 'react';
import { Link } from "react-router-dom";
import Styles from './withMenu.module.scss';
import { Menu, Icon, Avatar } from 'antd';

export default (Page: React.FC) => (
  () => (
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
          defaultSelectedKeys={['billing']}
          mode="inline"
          style={{ borderRight: 0 }}
        >
          <Menu.Item key="billing">
            <Link to="/"><Icon type="appstore" />Facturación</Link>
          </Menu.Item>
          <Menu.Item key="sales">  
            <Link to="/"><Icon type="appstore" />Ventas</Link>
          </Menu.Item>
          <Menu.Item key="cash">
            <Link to="/"><Icon type="appstore" />Caja</Link>
          </Menu.Item>
          <Menu.Item key="inventory">
            <Link to="/"><Icon type="appstore" />Inventario</Link>
          </Menu.Item>
        </Menu> 
      </div>
      <Page />
    </div>
  )
);
