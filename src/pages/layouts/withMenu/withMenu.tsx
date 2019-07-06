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
          <span>Cerrar sesión</span>
        </div>
      </div>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          style={{ borderRight: 0 }}
        >
          <Menu.Item key="1">
            <Link to="/"><Icon type="appstore" />Facturación</Link>
          </Menu.Item>
          <Menu.Item key="2">  
            <Link to="/"><Icon type="appstore" />Ventas</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/"><Icon type="appstore" />Caja</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/"><Icon type="appstore" />Inventario</Link>
          </Menu.Item>
        </Menu> 
      </div>
      <Page />
    </div>
  )
);
