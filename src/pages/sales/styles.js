import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: black !important;
`;

export const PrintButton = styled.div`
  max-width: 10rem;
  margin-bottom: 1rem;

  @media print {
    display: none;
  }
`;

export const ReceiptWrapper = styled.div`
  max-width: 380px !important;
  width: 380px !important;
  font-family: monospace;
  font-size: 1rem;
  border: 1px solid #ddd;
  padding: 20px 10px 10px 0;
  box-shadow: 5px 5px 15px #ccc;
  text-align: center;

  @media print {  
    margin: 0;
    border: 0;
    padding: 0;
    box-shadow: none;
  }
`;
