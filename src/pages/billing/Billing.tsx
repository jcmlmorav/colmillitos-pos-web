import React from 'react';
import withMenu from '../layouts/withMenu/withMenu';
import withSidebar from '../layouts/withSidebar/withSidebar';
import { Col, Input, Row } from 'antd';
import ProductsList from '../../components/productsList/ProductsList';
import Styles from './billing.module.scss';

const Billing: React.FC = () => {
  const Search = Input.Search;

  return (
    <div className={Styles.page}>
      <Row>
        <Col span={16} offset={4}>
          <Search
            placeholder="Escanee el código, busque por precio o busque por palabra clave"
            onSearch={value => alert(`Futura busqueda: ${value}`)}
            enterButton
            tabIndex={0}
            className={Styles.search}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ProductsList />
        </Col>
      </Row>
    </div>
  );
};

export default withMenu(withSidebar(Billing));
