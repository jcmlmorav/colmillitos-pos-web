import React, { useState, useEffect } from 'react';
import IProductDetails from '../../../../../../interfaces/IProductDetails';
import { Spin, Button, Form, Input } from 'antd';
import { SpinWrapper, FormItemWrapper, FormGroupWrapper, SubmitWrapper } from './styles';

type Props = {
  product: IProductDetails | Record<string, any>;
  handleSubmit: Function;
};

const EditProduct = ({ product, handleSubmit }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState(product);
  let content = (
    <SpinWrapper>
      <Spin tip="Cargando" />
    </SpinWrapper>
  );

  useEffect(() => {
    setSelectedProduct(product);
  }, [product]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    handleSubmit();
  };

  const handleChange = (event: Record<string, any>) => {
    const key = event.target.name;
    const value = event.target.value;
    setSelectedProduct({
      ...selectedProduct,
      [key]: value
    });
  }

  if (Object.keys(product).length > 1) {
    content = (
      <Form onSubmit={onSubmit}>
        <FormItemWrapper>
          <span>Código</span>
          <Input value={selectedProduct.barcode} disabled />
        </FormItemWrapper>
        <FormItemWrapper>
          <span>Descripción</span>
          <Input autoFocus id="description" name="description" value={selectedProduct.description} onChange={handleChange} />
        </FormItemWrapper>
        <FormGroupWrapper>
          <FormItemWrapper>
            <span>Stock</span>
            <Input name="quantity" value={selectedProduct.quantity} onChange={handleChange} />
          </FormItemWrapper>
          <FormItemWrapper>
            <span>Precio</span>
            <Input prefix="$" name="price" value={selectedProduct.price} onChange={handleChange} />
          </FormItemWrapper>
          <FormItemWrapper>
            <span>Descuento</span>
            <Input prefix="%" name="discount" value={selectedProduct.discount} onChange={handleChange} />
          </FormItemWrapper>
        </FormGroupWrapper>
        <SubmitWrapper>
          <Button htmlType="submit">Actualizar</Button>
        </SubmitWrapper>
      </Form>
    );
  }

  return content;
};

export default EditProduct;
