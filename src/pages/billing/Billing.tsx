import React from 'react';
import withMenu from '../layouts/withMenu/withMenu';
import withSidebar from '../layouts/withSidebar/withSidebar';
import { Col, Input, Row } from 'antd';
import ProductsList from '../../components/ProductsList';
import FeaturedProduct from '../../components/FeaturedProduct';
import Styles from './billing.module.scss';
import Sidebar from './components/Sidebar';

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
        <Col span={24}>
          <ProductsList />
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span={3}>
          <FeaturedProduct 
            cover="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" 
            alt="example"
            title="Card 1"
          ></FeaturedProduct>
        </Col>
        <Col span={3}>
          <FeaturedProduct 
            cover="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" 
            alt="example"
            title="Card 2"
          ></FeaturedProduct>
        </Col>
        <Col span={3}>
          <FeaturedProduct 
            cover="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" 
            alt="example"
            title="Card 3"
          ></FeaturedProduct>
        </Col>
        <Col span={3}>
          <FeaturedProduct 
            cover="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" 
            alt="example"
            title="Card 4"
          ></FeaturedProduct>
        </Col>
        <Col span={3}>
          <FeaturedProduct 
            cover="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" 
            alt="example"
            title="Card 4"
          ></FeaturedProduct>
        </Col>
        <Col span={3}>
          <FeaturedProduct 
            cover="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" 
            alt="example"
            title="Card 4"
          ></FeaturedProduct>
        </Col>
      </Row>
    </div>
  );
};

export default withMenu(withSidebar(Billing, Sidebar));
