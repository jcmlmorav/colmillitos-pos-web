import React from 'react';
import IProductDetails from '../../../../interfaces/IProductDetails';
import { Collapse, Avatar, Button, Result, Icon } from 'antd';
import { InfoWrapper, PriceWrapper, DetailsWrapper } from './styles';
import { currencyFormat, getDiscount } from '../../../../utils/maths';

interface Props {
  products: IProductDetails[]
};

const ProductsInfo = ({ products }: Props) => {
  let content = null;

  if (products.length) {
    content = (
      <Collapse expandIconPosition="right">
        {products.map((product) => (          
          <Collapse.Panel header={
            <InfoWrapper>
              <span>{product.barcode}</span>
              <span>{product.description}</span>
              <div>
                {product.discount > 0 && (
                  <PriceWrapper hasDiscount>{currencyFormat(product.price)}</PriceWrapper>                      
                )}
                <PriceWrapper>
                  {currencyFormat(product.price - getDiscount(product.price, product.discount))}
                </PriceWrapper>
              </div>
            </InfoWrapper>
          } key={product.id}>
            <DetailsWrapper>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50} />
              <span>Cantidad: {product.quantity}</span>
              <span>Porcentaje descuento: {product.discount}%</span>
              <span>Descuento: {currencyFormat(getDiscount(product.price, product.discount))}</span>
              <Button type="primary" shape="circle" icon="edit" size='large' />
            </DetailsWrapper>
          </Collapse.Panel>
        ))}
      </Collapse>
    );
  } else {
    content = (
      <Result
        icon={<Icon type="notification" theme="twoTone" />}
        title="No se encontraron productos registrados"
        extra={<Button type="primary">Agregar producto</Button>}
        status="info"
      />
    );
  }

  return content;
};

export default ProductsInfo;
