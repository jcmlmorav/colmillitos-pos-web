import React from 'react';
import IProductInList from '../../../interfaces/IProductsInList';
import { ColumnProps } from 'antd/lib/table';
import { Avatar, Button, Icon, InputNumber, Table } from 'antd';

type State = {
  products: IProductInList[]
};

class ProductsList extends React.Component<{}, State> {
  public state = { products: [] }

  componentDidMount() {
    const data: IProductInList[] = [
      {
        key: 1,
        image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: 'CHUNKY ADULTO CORDERO, ARROZ Y SALMON 1KG',
        quantity: 2,
        price: 500,
        subtotal: 1000,
        discount: 100,
        iva: 0,
        total: 900
      },
      {
        key: 2,
        image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: 'WHISKAS CARNE ADULTOS',
        quantity: 3,
        price: 2500,
        subtotal: 7500,
        discount: 750,
        iva: 0,
        total: 6750
      }
    ];

    this.setState({products: data});
  }

  render() {
    const { products } = this.state;
    const columns: ColumnProps<IProductInList>[] = [
      {
        title: '',
        dataIndex: 'image',
        key: 'image',
        render: (url: string) => <Avatar src={url} />
      },
      {
        title: 'Producto',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Cantidad',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (quantity: number) => <InputNumber min={1} value={quantity} />
      },
      {
        title: 'Precio unitario',
        key: 'price',
        dataIndex: 'price'
      },
      {
        title: 'Subtotal',
        key: 'subtotal',
        dataIndex: 'subtotal'
      },
      {
        title: 'Descuento',
        key: 'discount',
        dataIndex: 'discount',
        render: (value: number) => <span>{value} <sup>10%</sup></span>
      },
      {
        title: 'IVA',
        key: 'iva',
        dataIndex: 'iva'
      },
      {
        title: 'Total',
        key: 'total',
        dataIndex: 'total',
        render: (total: number) => <strong>{total}</strong>
      },
      {
        title: '',
        dataIndex: 'actions',
        render: () => <Button type="primary" shape="circle" icon="delete" size='large' />
      }
    ];

    return (
      <Table<IProductInList>
        columns={columns}
        dataSource={products}
        pagination={false}
        locale={{
          emptyText: (
            <span>
              <Icon type="inbox" style={{ fontSize: '4em' }} />
              <br />
              Sin productos
            </span>
          )
        }}
      />
    );
  }
}

export default ProductsList;
