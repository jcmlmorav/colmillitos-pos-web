import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-areas: "menu page";
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 10fr;
`;

export const MenuWrapper = styled.div`
  grid-area: menu;
  border-right: 1px solid #e8e8e8;

  @media print {
    display: none;
  }
`;

export const PageWrapper = styled.div`
  grid-area: page;
  background-color: white;
  padding: 1rem 0;
`;

export const User = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const UserProperties = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;
