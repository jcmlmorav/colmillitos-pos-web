import styled from 'styled-components';

export const Wrapper = styled.div`
  background: white;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: "page sidebar";
  grid-template-rows: 1fr;
  grid-template-columns: 9fr 3fr;
`;

export const SidebarWrapper = styled.div`
  grid-area: sidebar;
  background-color: white;
  border-left: 1px solid #e8e8e8;
  padding: 0.25rem;

  @media print {
    display: none;
  }
`;
