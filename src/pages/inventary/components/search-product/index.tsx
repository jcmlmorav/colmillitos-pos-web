import React, { useEffect } from 'react';
import searchProductProps from '../../../../types/searchProductProps';
import { Wrapper } from './styles';
import { Input } from 'antd';

const SearchProduct = ({onSearch}: searchProductProps) => {
  useEffect(() => {
    const searchProductInput = document.getElementById('search-product');
    if (searchProductInput) searchProductInput.focus();
  });

  return (
    <Wrapper>
      <Input.Search
        id="search-product"
        placeholder="Escanee el código, busque por precio o por palabra clave"
        onSearch={onSearch}
        enterButton
        tabIndex={0}
      />
    </Wrapper>
  );
};

export default SearchProduct;
