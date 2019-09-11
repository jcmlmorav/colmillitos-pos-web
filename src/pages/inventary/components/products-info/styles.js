import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 1.5fr;
  align-items: center;
`;

export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1.5fr 0.5fr;
  align-items: center;
`;

export const PriceWrapper = styled.span`
  margin: 0 0.5rem;
  color: ${props => props.hasDiscount &&
    '#c2c2c2'
  };
  text-decoration: ${props => props.hasDiscount &&
    'line-through'
  };
`;
