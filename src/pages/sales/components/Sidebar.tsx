import React from 'react';
import { State } from '../../../types/sales';
import ISale from '../../../interfaces/ISale';
import { Button, Divider, Icon, List } from 'antd';

class Sidebar extends React.Component<{}, State> {
  public state = { sales: [] };

  componentDidMount() {
    const data: ISale[] = [
      {
        key: 1,
        total: 9000,
        date: 'January 1, 2019'
      },
      {
        key: 2,
        total: 13000,
        date: 'January 1, 2019'
      }
    ];

    this.setState({ sales: data });
  }

  render() {
    const { sales } = this.state;

    return (
      <>
        <Divider>Ventas</Divider>
        <List
          itemLayout="horizontal"
          dataSource={sales}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={ item['total'] }
                description={ item['date'] }
              />
              <Button><Icon type="eye" theme="twoTone" /></Button>
            </List.Item>
          )}
        />
      </>
    );
  }
}

export default Sidebar;