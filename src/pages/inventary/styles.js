import styled from 'styled-components'

export const Page = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: white;
  padding: 1rem 0;
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
`;

export const Price = styled.span`
  margin: 0 .5rem;
  color: ${props => props.hasDiscount &&
    '#c2c2c2'
  };
  text-decoration: ${props => props.hasDiscount &&
    'line-through'
  };
`;

export const AmountAndDiscount = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
`;
