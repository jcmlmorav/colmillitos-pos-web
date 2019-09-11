import React from 'react';
import { Wrapper, CardContainer, Balance, Incomes, Action } from './styles';
import { Card, Icon, List, Button, Skeleton } from 'antd';
import INCOMES from '../../utils/mocks/incomes.mock';
import DEBTS from '../../utils/mocks/debts.mock';
import EXPENSES from '../../utils/mocks/expenses.mock';
import withMenu from '../layouts/withMenu';
import withSidebar from '../layouts/withSidebar';
import Sidebar from './components/sidebar/Sidebar';

const Finances = () => (
  <Wrapper>
    <CardContainer id="balance">
      <Card type="inner" title="Balance">
        <Balance>$ 1.600.000</Balance>
      </Card>
    </CardContainer>
    <CardContainer id="expenses">
      <Card type="inner" title="Egresos">
        <Incomes>$ 400.000</Incomes>
        <Action>
          <a href="/">
            <Icon type="file-add"></Icon> Agregar nuevo
          </a>
        </Action>
        <List
          loading={false}
          itemLayout="horizontal"
          loadMore={true}
          dataSource={EXPENSES}
          renderItem={item => (
            <List.Item
              actions={[<Button type="primary" shape="circle" icon="delete" size='large' />]}
            >
              <Skeleton title={false} loading={false} active>
                <List.Item.Meta style={{textAlign: 'left'}} description={item.description} />
                <div>$ {item.amount.toLocaleString()}</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </Card>
    </CardContainer>
    <CardContainer id="debts">
      <Card type="inner" title="Deudas">
        <Incomes>$ 150.000</Incomes>
        <List
          loading={false}
          itemLayout="horizontal"
          loadMore={true}
          dataSource={DEBTS}
          renderItem={item => (
            <List.Item
              actions={[<Button type="primary" shape="circle" icon="eye" size='large' />]}
            >
              <Skeleton title={false} loading={false} active>
                <List.Item.Meta style={{textAlign: 'left'}} description={item.description} />
                <div>$ {item.amount.toLocaleString()}</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </Card>
    </CardContainer>
    <CardContainer id="incomes">
      <Card type="inner" title="Ingresos">
        <Incomes>$ 2.000.000</Incomes>
        <Action>
          <a href="/">
            <Icon type="file-add"></Icon> Agregar nuevo
          </a>
        </Action>
        <List
          loading={false}
          itemLayout="horizontal"
          loadMore={true}
          dataSource={INCOMES}
          renderItem={item => (
            <List.Item
              actions={[<Button type="primary" shape="circle" icon="delete" size='large' />]}
            >
              <Skeleton title={false} loading={false} active>
                <List.Item.Meta style={{textAlign: 'left'}} description={item.description} />
                <div>$ {item.amount.toLocaleString()}</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </Card>
    </CardContainer>
  </Wrapper>
);

export default withMenu(withSidebar(Finances, Sidebar));
