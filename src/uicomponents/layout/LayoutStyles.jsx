import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 50px;
`;

export const LayoutContainer = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const SidePanelContainer = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  bottom: 0;
  width: 20%;
  z-index: 999;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainContent = styled.div`
  margin-left: 250px;
  flex: 1;
  margin-top: 50px;
  padding: 1rem;
  width: 80%;

  @media (max-width: 768px) {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
