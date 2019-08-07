import React from 'react';
import { Card } from 'antd';
import IPropsFeaturedProduct from '../../../interfaces/IPropsFeaturedProduct';

const FeaturedProduct = ({ cover, alt, title }: IPropsFeaturedProduct) => (
  <Card
    cover={
      <img
        src={cover}
        alt={alt}
      />
    }
  >
    <Card.Meta title={title} />
  </Card>
);

export default FeaturedProduct;
