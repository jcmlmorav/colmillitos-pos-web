import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Button, Modal } from 'antd';
import TYPES from '../../store/types';
import { setFocus } from '../../utils/functions';
import { Wrapper, SearchProductWrapper, CreateProductWrapper } from './styles';
import SearchProduct from './components/search-product';
import ProductsInfo from './components/products-info';
import RegisterProduct from './components/register-product';
import withMenu from '../layouts/withMenu';
import withSidebar from '../layouts/withSidebar';
import Sidebar from './components/Sidebar';

const Inventary: React.FC = () => {
  const [fetched, setFetched] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { products, fetching } = useSelector((state: Record<string, any>) => state.products);
  let content = (<Spin tip="Cargando"></Spin>);

  useEffect(() => {
    if (!fetched) dispatch({ type: TYPES.PRODUCTS.FETCH });

    if (!fetching) {
      setFetched(true);
    }
  }, [fetched, dispatch, fetching, products]);

  function onSearch(value: string) {
    if (value === '') {
      dispatch({ type: TYPES.PRODUCTS.FETCH });
    } else {
      dispatch({ type: TYPES.PRODUCT.FETCH, value});
    }
  }

  const handleCancel = () => {
    setFocus('search-product');
    setModalOpen(false);
  }

  const handleSubmit = () => {
    setFocus('search-product');
    setModalOpen(false);
  }

  const onModalOpen = () => {
    setFocus('barcode');
    setModalOpen(true);
  }

  if (!fetching) {
    content = (<ProductsInfo products={products} />);
  }

  return (
    <Wrapper>
      <SearchProductWrapper>
        <SearchProduct onSearch={onSearch} />
        <CreateProductWrapper>
          <Button
            type="primary"
            icon="plus"
            size='small'
            onClick={onModalOpen}
          >
            Registrar producto
          </Button>
        </CreateProductWrapper>
      </SearchProductWrapper>
      {content}
      <Modal
        visible={modalOpen}
        title="Registrar producto"
        onOk={handleSubmit}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" loading={false} onClick={handleSubmit}>
            Registrar
          </Button>
        ]}
      >
        <RegisterProduct handleSubmit={handleSubmit} clean={modalOpen} />
      </Modal>
    </Wrapper>
  );
};

export default withMenu(withSidebar(Inventary, Sidebar));
