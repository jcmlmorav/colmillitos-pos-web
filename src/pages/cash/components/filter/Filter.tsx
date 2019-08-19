import React from 'react';
import { Wrapper, Text } from './styles';
import { Select, Typography } from 'antd';

const Filter: React.ElementType = () => (
  <Wrapper>
    <Text>
      <Typography.Text>Seleccione el día para filtrar</Typography.Text>
    </Text>
    <Select defaultValue="today" style={{ width: '12rem' }}>
      <Select.Option value="today">Hoy</Select.Option>
      <Select.Option value="yesterday">Ayer</Select.Option>
    </Select>
  </Wrapper>
);

export default Filter;
