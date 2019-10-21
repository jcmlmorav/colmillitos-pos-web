import React, { useState, useEffect } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { FormItemWrapper, FormGroupWrapper, SubmitWrapper } from './styles';

type Props = {
  handleSubmit: Function;
  handleCancel: Function;
  clean: boolean;
};

const RegisterProduct = ({ handleSubmit, handleCancel, clean }: Props) => {
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
    handleSubmit(product);
  };

  const onCancel = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    handleCancel();
  }

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
        <Input
          autoFocus
          id="barcode"
          name="barcode"
          maxLength={100}
          value={product.barcode}
          onChange={handleChange}
        />
      </FormItemWrapper>
      <FormItemWrapper>
        <span>Descripción</span>
        <Input
          name="description"
          maxLength={40}
          value={product.description}
          onChange={handleChange}
        />
      </FormItemWrapper>
      <FormGroupWrapper>
        <FormItemWrapper>
          <span>Stock</span>
          <InputNumber
            name="quantity"
            min={0}
            value={product.quantity}
            onChange={(value: number | undefined) => (
              handleChange({
                target: {
                  name: 'quantity',
                  value
                }
              })
            )}
          />
        </FormItemWrapper>
        <FormItemWrapper>
          <span>Precio</span>
          <InputNumber
            name="price"
            min={0}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value ? value.replace(/\$\s?|(,*)/g, '') : 0}
            value={product.price}
            onChange={(value: number | undefined) => (
              handleChange({
                target: {
                  name: 'price',
                  value
                }
              })
            )}
          />
        </FormItemWrapper>
        <FormItemWrapper>
          <span>Descuento</span>
          <InputNumber
            name="discount"
            min={0}
            max={100}
            formatter={value => `${value}%`}
            parser={value => value ? value.replace('%', '') : 0}
            value={product.discount}
            onChange={(value: number | undefined) => (
              handleChange({
                target: {
                  name: 'discount',
                  value
                }
              })
            )}
          />
        </FormItemWrapper>
      </FormGroupWrapper>
      <SubmitWrapper>
        <Button onClick={onCancel}>Cancelar</Button>
        <Button htmlType="submit" type="primary" loading={false}>Registrar</Button>
      </SubmitWrapper>
    </Form>
  );
};

export default RegisterProduct;
