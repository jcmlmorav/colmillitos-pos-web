import React from 'react';
import { Card } from 'antd';
import IPropsFeaturedProduct from '../interfaces/IPropsFeaturedProduct';

const FeaturedProduct = ({ cover, alt, title }: IPropsFeaturedProduct) => {
  const { Meta } = Card;

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
