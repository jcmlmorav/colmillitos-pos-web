import React from 'react';
import { Wrapper, CardContainer } from './styles';
import { Card, Statistic, Icon } from 'antd';

export const Sidebar = () => (
  <Wrapper>
    <CardContainer>
      <Card>
        <Statistic
          title="Top #1"
          value={650000}
          precision={0}
          valueStyle={{ color: '#3f8600' }}
          prefix={<Icon type="arrow-up" />}
          suffix="COP"
        />
      </Card>
    <CardContainer>
    </CardContainer>
      <Card>
        <Statistic
          title="Top #2"
          value={650000}
          precision={0}
          valueStyle={{ color: '#03966f' }}
          prefix={<Icon type="arrow-up" />}
          suffix="COP"
        />
      </Card>
    <CardContainer>
    </CardContainer>
      <Card>
        <Statistic
          title="Top #3"
          value={650000}
          precision={0}
          valueStyle={{ color: '#035196' }}
          prefix={<Icon type="arrow-up" />}
          suffix="COP"
        />
      </Card>
    </CardContainer>
  </Wrapper>
);

export default Sidebar;
