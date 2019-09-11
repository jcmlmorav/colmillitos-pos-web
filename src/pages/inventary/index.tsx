import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import TYPES from '../../store/types';
import { Wrapper, SearchProductWrapper } from './styles';
import SearchProduct from './components/search-product';
import ProductsInfo from './components/products-info';
import withMenu from '../layouts/withMenu';
import withSidebar from '../layouts/withSidebar';
import Sidebar from './components/Sidebar';

const Inventary: React.FC = () => {
  const dispatch = useDispatch();
  const { products, fetching } = useSelector((state: Record<string, any>) => state.products);
  let content = (<Spin tip="Cargando"></Spin>);

  useEffect(() => {
    if (!fetching && products.length === 0) {
      dispatch({ type: TYPES.PRODUCTS.FETCH });
    }
  }, [fetching, products, dispatch]);

  if (!fetching) {
    content = (<ProductsInfo products={products} />);
  }

  return (
    <Wrapper>
      <SearchProductWrapper>
        <SearchProduct />
      </SearchProductWrapper>
      {content}
    </Wrapper>
  );
};

export default withMenu(withSidebar(Inventary, Sidebar));
