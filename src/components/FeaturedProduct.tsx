import React from 'react';
import { Card } from 'antd';
import IPropsFeaturedProduct from '../interfaces/IPropsFeaturedProduct';

const { Meta } = Card;

const FeaturedProduct = ({ cover, alt, title }: IPropsFeaturedProduct) => {
  return (
    <Card
      cover={
        <img
          src={cover}
          alt={alt}
        />
      }
    >
      <Meta title={title} />
    </Card>
  )
};

export default FeaturedProduct;