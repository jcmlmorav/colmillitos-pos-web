import React, { useState } from 'react';
import { setFocus } from '../../../../utils/functions';
import { Collapse, Avatar, Button, Modal, Result, Icon } from 'antd';
import IProductDetails from '../../../../interfaces/IProductDetails';
import { InfoWrapper, PriceWrapper, DetailsWrapper } from './styles';
import EditProduct from './components/edit-product';
import { currencyFormat, getDiscount } from '../../../../utils/maths';

type Props = {
  products: IProductDetails[]
};

const ProductsInfo = ({ products }: Props) => {
  const [modalOpen, setModalOpen ] = useState(false);
  const [product, setProduct] = useState({});

  let content = null;
  let activeKey = '0';

  if (products.length === 1) {
    activeKey = `${products[0].id}`;
  }

  const handleCancel = () => {
    setFocus('search-product');
    setModalOpen(false);
  }

  const handleSubmit = () => {
    setFocus('search-product');
    setModalOpen(false);
  }

  const onProductSelected = (product: Record<string, any>) => {
    setProduct(product);
    setModalOpen(true);
    setFocus('description');
  }

  if (products.length) {
    content = (
      <>
        <Collapse expandIconPosition="right" defaultActiveKey={[activeKey]}>
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
                <Button
                  type="primary"
                  shape="circle"
                  icon="edit"
                  size='large'
                  onClick={() => onProductSelected(product)}
                />
              </DetailsWrapper>
            </Collapse.Panel>
          ))}
        </Collapse>
        <Modal
          visible={modalOpen}
          title="Editar producto"
          onOk={handleSubmit}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" loading={false} onClick={handleSubmit}>
              Actualizar
            </Button>
          ]}
        >
          <EditProduct product={product} handleSubmit={handleSubmit} />
        </Modal>
      </>
    );
  } else {
    content = (
      <Result
        icon={<Icon type="notification" theme="twoTone" />}
        title="No se encontraron productos registrados"
        status="info"
      />
    );
  }

  return content;
};

export default ProductsInfo;
