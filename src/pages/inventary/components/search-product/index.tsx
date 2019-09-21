import React from 'react';
import { Wrapper } from './styles';
import { Input } from 'antd';

type Props = {
  onSearch: ((value: string) => void);
};

const SearchProduct = ({onSearch}: Props) => {
  return (
    <Wrapper>
      <Input.Search
        id="search-product"
        placeholder="Escanee el código, busque por precio o por palabra clave"
        onSearch={onSearch}
        enterButton
        autoFocus
        tabIndex={0}
      />
    </Wrapper>
  );
};

export default SearchProduct;
