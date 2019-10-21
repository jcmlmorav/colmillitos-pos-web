import styled from 'styled-components';

export const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  span { margin-bottom: 0.5rem }
`;

export const FormGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr;
  grid-gap: 3rem;

  .ant-input-number { width: 100% }
`;

export const SubmitWrapper = styled.div`
  display: none;
`;

export const SpinWrapper = styled.div`
  width: 25px;
  margin: 0 auto;
`;
