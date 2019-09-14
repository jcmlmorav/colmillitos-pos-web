import React, { useState, useEffect } from 'react';
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
  const [fetched, setFetched] = useState(false);
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

  if (!fetching) {
    content = (<ProductsInfo products={products} />);
  }

  return (
    <Wrapper>
      <SearchProductWrapper>
        <SearchProduct onSearch={onSearch} />
      </SearchProductWrapper>
      {content}
    </Wrapper>
  );
};

export default withMenu(withSidebar(Inventary, Sidebar));
