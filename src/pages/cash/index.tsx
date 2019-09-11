import React, { useState, useEffect } from 'react';
import IProductsInCash from '../../interfaces/IProductsInCash';
import { ColumnProps } from 'antd/lib/table';
import { Button, Icon, Table } from 'antd';
import { Wrapper, Amount } from './styles';
import Filter from './components/filter';
import { Typography } from 'antd';
import withMenu from '../layouts/withMenu';
import withSidebar from '../layouts/withSidebar';
import Sidebar from './components/sidebar';

const Cash: React.ElementType = () => {
  const [ products, setProducts ] = useState<Array<IProductsInCash>>([]);

  useEffect(() => {
    setProducts([
      {
        key: 0,
        description: 'Factura 0',
        quantity: 0,
        total: 1000
      },
      {
        key: 1,
        description: 'Factura 1',
        quantity: 1,
        total: 2000
      }
    ]);
  }, [products]);

  const columns: ColumnProps<IProductsInCash>[] = [
    {
      title: '',
      dataIndex: 'button',
      key: 'button',
      render: (text, record) => <Button type="primary" shape="circle" icon="eye" size='large' onClick={() => console.log(record.key)} />
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Cantidad',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: 'Valor',
      dataIndex: 'total',
      key: 'total'
    }
  ];

  return (
    <Wrapper>
      <Filter />
      <Amount>
        <Typography.Title level={4}>Total: <strong>$100.000</strong></Typography.Title>
      </Amount>
      { products.length && (
        <Table<any>
          columns={columns}
          dataSource={products}
          pagination={false}
          locale={{
            emptyText: (
              <span>
                <Icon type="inbox" style={{ fontSize: '4em' }} />
                <br />
                Sin ventas
              </span>
            )
          }}
        />
      )}
    </Wrapper>
  );
};

export default withMenu(withSidebar(Cash, Sidebar));
