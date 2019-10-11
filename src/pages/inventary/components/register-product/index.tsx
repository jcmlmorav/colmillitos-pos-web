import React, { useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { FormItemWrapper, FormGroupWrapper, SubmitWrapper } from './styles';

type Props = {
  handleSubmit: Function;
  clean: boolean;
};

const RegisterProduct = ({ handleSubmit, clean }: Props) => {
  const PRODUCT = {
    barcode: '',
    description: '',
    quantity: 0,
    price: 0,
    discount: 0
  }
  const [product, setProduct] = useState(PRODUCT);

  useEffect(() => {
    if (!clean) {
      setProduct(PRODUCT);
    }
  }, [clean, PRODUCT]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    handleSubmit();
  };

  const handleChange = (event: Record<string, any>) => {
    const key = event.target.name;
    const value = event.target.value;
    setProduct({
      ...product,
      [key]: value
    });
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormItemWrapper>
        <span>Código</span>
        <Input autoFocus id="barcode" name="barcode" value={product.barcode} onChange={handleChange} />
      </FormItemWrapper>
      <FormItemWrapper>
        <span>Descripción</span>
        <Input name="description" value={product.description} onChange={handleChange} />
      </FormItemWrapper>
      <FormGroupWrapper>
        <FormItemWrapper>
          <span>Stock</span>
          <Input name="quantity" value={product.quantity} onChange={handleChange} />
        </FormItemWrapper>
        <FormItemWrapper>
          <span>Precio</span>
          <Input prefix="$" name="price" value={product.price} onChange={handleChange} />
        </FormItemWrapper>
        <FormItemWrapper>
          <span>Descuento</span>
          <Input prefix="%" name="discount" value={product.discount} onChange={handleChange} />
        </FormItemWrapper>
      </FormGroupWrapper>
      <SubmitWrapper>
        <Button htmlType="submit">Registrar</Button>
      </SubmitWrapper>
    </Form>
  );
};

export default RegisterProduct;
