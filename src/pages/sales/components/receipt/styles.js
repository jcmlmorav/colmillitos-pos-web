import styled from 'styled-components';

export const Paragraph = styled.p`
  max-width: 380px;

  @media print {
    max-width: 380px;
  }
`;

export const TableWrapper = styled.table`
  clear: both;
  width: 380px;

  @media print {
    clear: both;
    width: 380px;
  }
`;
