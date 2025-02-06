import styled from "styled-components";

export const SidebarStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 6px;
  max-width: 300px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 8px;
  }
`;

export const SidebarItem = styled.div`
  /* flex-grow: 1; */
`;
