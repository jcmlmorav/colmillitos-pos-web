import React from 'react';
import { Row, Col, Input, Collapse, Avatar, Button } from 'antd';
import Styles from './inventary.module.scss';
import { 
  Page,
  Product,
  Price,
  AmountAndDiscount 
} from './styles';
import currencyFormat from '../../utils/CurrencyFormat';
import MockInventary from '../../utils/mocks/MInventary';
import withMenu from '../layouts/withMenu/withMenu';
import withSidebar from '../layouts/withSidebar/withSidebar';
import Sidebar from './components/Sidebar';


const Inventary: React.FC = () => {

  const getDiscount = (price: number, discount: number) => price * discount/100; 

  const Search = Input.Search;
  const { Panel } = Collapse;

  return (
    <Page>
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
          <Collapse expandIconPosition="right">
            {MockInventary.map((_product, i) => (          
              <Panel header={
                <Product>
                  <span>{_product.id}</span>
                  <span>{_product.description}</span>
                  <div>
                    {
                      _product.discount > 0 &&           
                      <Price hasDiscount>{currencyFormat(_product.price)}</Price>                      
                    }
                    <Price>
                      {currencyFormat(_product.price - getDiscount(_product.price, _product.discount))}
                    </Price>
                  </div>
                </Product>
              } key={i}>
                <Product>
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50} />
                  <AmountAndDiscount>
                    <span>Cantidad: {_product.quantity}</span>
                    <span>Porcentaje descuento: {_product.discount}%</span>
                    <span>Descuento: {currencyFormat(getDiscount(_product.price, _product.discount))}</span>
                  </AmountAndDiscount>
                  <Button type="primary" shape="circle" icon="edit" size='large' />
                </Product>
              </Panel>
            ))}
          </Collapse>
        </Col>
      </Row>
    </Page>
  )
};

export default withMenu(withSidebar(Inventary, Sidebar));
